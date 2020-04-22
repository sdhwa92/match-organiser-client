import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of, from, Subject} from 'rxjs';
import {Auth} from 'aws-amplify';
import {UserCredentialsModel} from '../models/user-credentials.model';
import {UserModel} from '../models/user.model';
import {CodeDeliveryDetailsModel} from '../models/code-delivery-details.model';

@Injectable()
export class AuthTokenService {
  private _hasAuthenticated$ = new Subject();
  hasAuthenticated$ = this._hasAuthenticated$.asObservable();

  constructor(
    private _httpClient: HttpClient,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  getToken( user: UserCredentialsModel ): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'applications/x-www-form-urlencoded');

    return of(true);
  }

  /**
   * Send signup request by using amplify Auth
   * @param user: required param
   */
  authSignUp(user: UserModel): Observable<any> {
    const result = from(Auth.signUp(user));
    return result;
  }

  /**
   * Verify the email address
   * @param username: email address that chosen to sign in the user.
   * @param verifyCode: six digit verification code.
   */
  authConfirmSignUp(username: string, verifyCode: string): Observable<any> {
    const result = from(Auth.confirmSignUp(username, verifyCode));
    return result;
  }

  /**
   * Sign in by leveraging Amplify and AWS Cognito
   * @param loginCredentials: username and password
   */
  async authSignIn(loginCredentials: {username: string, password: string}) {
    try {
      const user = await Auth.signIn(loginCredentials.username, loginCredentials.password);
      // console.log(user);
      const myLoginSession = sessionStorage.getItem('token');
      if ( myLoginSession ) {
        sessionStorage.removeItem('token');
      }
      this._hasAuthenticated$.next(true);
      const userSession = {
        jwtToken: user.signInUserSession.accessToken,
        username: user.username
      };
      sessionStorage.setItem('token', JSON.stringify(userSession));
      this._router.navigate(['/']);
    } catch (err) {
      console.log('error signing in', err);
    }
  }
}
