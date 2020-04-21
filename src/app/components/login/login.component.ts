import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthTokenService} from '../../services/auth-token.service';
import {UserModel} from '../../models/user.model';
import {BehaviorSubject, Subject} from 'rxjs';
import {finalize, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject();
  view: 'signIn' | 'signUp' | 'verification' | 'forgotPassword' = 'signIn';
  loginForm: FormGroup;
  signUpForm: FormGroup;
  verificationCodeForm: FormGroup;

  username: string;

  private _cofirmCodeSent$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  confirmCodeSent$ = this._cofirmCodeSent$.asObservable();

  private _signUpSuccess$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  signUpSuccess$ = this._signUpSuccess$.asObservable();

  constructor(
    private _fb: FormBuilder,
    private _authTokenService: AuthTokenService
  ) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      remember: false
    });

    this.signUpForm = this._fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      name: ['', Validators.required]
    });

    this.verificationCodeForm = this._fb.group({
      verificationCode: ['', Validators.required]
    });
  }

  ngOnDestroy(): void {

  }

  login(form: FormGroup) {
    console.log('login form');
    console.log(form);
    // this._authTokenService.getToken();
  }

  signUp(form: FormGroup) {
    console.log(form);
    if (form.valid) {
      const signUpDetails: UserModel = {
        username: form.get('email').value,
        password: form.get('password').value,
        attributes: {
          email: form.get('email').value,
          name: form.get('name').value
        }
      };
      console.log(signUpDetails);
      this._authTokenService.authSignUp(signUpDetails)
        .pipe(
          takeUntil(this._destroy$),
          finalize(() => {
            console.log('Form Submitted');
            this.reset('signUp');
          })
        )
        .subscribe(
          (val) => {
            console.log(val);
            this.username = signUpDetails.username;
            this._cofirmCodeSent$.next(true);
          }
        );
    }
  }

  /**
   * Send request to confirm sign up
   * @param form: Verification form group
   */
  verifyEmail(form: FormGroup) {
    console.log(form);
    if (form.valid) {
      this._authTokenService.authConfirmSignUp(this.username, form.get('verificationCode').value)
        .pipe(
          takeUntil(this._destroy$),
          finalize(() => {
            console.log('Form Submitted');
            this.reset('verification');
          })
        )
        .subscribe(
          (val) => {
            console.log(val);
            if (val === 'SUCCESS') {
              this._signUpSuccess$.next(true);
            }
          }
        );
    }
  }

  showForm(formName: 'signIn' | 'signUp' | 'forgotPassword') {
    this.view = formName;

    this._cofirmCodeSent$.next(false);
    this._signUpSuccess$.next(false);
  }

  reset(view: 'signIn' | 'signUp' | 'verification' | 'forgotPassword') {
    if ( view === 'signIn') {
      this.loginForm.reset();
    } else if ( view === 'signUp' ) {
      this.signUpForm.reset();
    } else if ( view === 'verification' ) {
      this.verificationCodeForm.reset();
    }
  }

}
