import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserCredentialsModel} from '../models/user-credentials.model';

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
}
