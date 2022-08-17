import { AuthenticationService } from './../../core/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Authentication } from 'src/app/core/model/authentication.model';
import { ConfirmPasswordValidator } from 'src/app/core/service/confirm-password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  isLoading = false;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.createForm();
  }

  ngOnInit():void {
    
  }
  signup() {
    this.isLoading = true;
    this.authenticationService
      .signup(this.signupForm.value)
      .pipe(
        finalize(() => {
          this.signupForm.markAsPristine();
          this.isLoading = false;
        })
      )
      .subscribe(
        (user: Authentication.User) => {
          console.log(user);
          this.router.navigate(['/login']);
        },
        (error: any) => {
          console.log(`Signup error: ${error}`);
        }
      );
  }

  private createForm() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      personalEmail: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required,Validators.minLength(10)]],
      password: ['', Validators.required],
      cPassword: ['', Validators.required]
    },{
        validator: ConfirmPasswordValidator("password", "cPassword")

    });
  }
}
