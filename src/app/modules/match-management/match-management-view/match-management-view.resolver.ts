import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthTokenService} from '../../../services/auth-token.service';

@Injectable()
export class MatchManagementViewResolver implements Resolve<Observable<any>> // @TODO: Define model for resolver return type
{
  constructor(
    private _authTokenService: AuthTokenService
  ) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return of(true);
  }
}
