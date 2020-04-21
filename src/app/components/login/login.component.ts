import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthTokenService} from '../../services/auth-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  view: 'signIn' | 'signUp' | 'forgotPassword' = 'signIn';
  loginForm: FormGroup;
  signUpForm: FormGroup;

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
  }

  login(form: FormGroup) {
    console.log(form);
    // this._authTokenService.getToken();
  }

  signUp(form: FormGroup) {
    console.log(form);
  }

  showForm(formName: 'signIn' | 'signUp' | 'forgotPassword') {
    this.view = formName;
  }

}
