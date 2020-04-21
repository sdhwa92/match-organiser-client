import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Observable, of, from} from 'rxjs';
import {Auth} from 'aws-amplify';
import {UserCredentialsModel} from '../models/user-credentials.model';
import {UserModel} from '../models/user.model';
import {CodeDeliveryDetailsModel} from '../models/code-delivery-details.model';

@Injectable()
export class AuthTokenService {

  constructor(
    private _httpClient: HttpClient,
    private _activatedRoute: ActivatedRoute
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
  authConfirmSignUp(username: string, verifyCode: string) {
    const result = from(Auth.confirmSignUp(username, verifyCode));
    return result;
  }
}
