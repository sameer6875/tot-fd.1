  import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login : FormGroup ;
  status : boolean = false ;
  message : string ="" ;
  forgottenPasswordStage: number = 0;
  forgottenPasswordForm: FormGroup;
  constructor(private formBuilder : FormBuilder)
  {
    this.login = formBuilder.group(
                                    {
                                      username : new FormControl('',Validators.required),
                                      password : new FormControl('',Validators.required)
                                    });
    this.forgottenPasswordForm = formBuilder.group(
                                    {
                                      emailId : new FormControl('',Validators.required)
                                    });
  }

  get username()
  {
    return this.login.get('username');
  }

  get password()
  {
    return this.login.get('password');
  }
  get emailId(){
    return this.forgottenPasswordForm.get('emailId');
  }
  save()
  {
    if(this.login.invalid)
    {
      this.login.markAllAsTouched();
      return;
    }
    this.status = true;
    this.message = "Login success";
  }
  forgottenPassword()
  {
    this.forgottenPasswordStage = 1;
  }
  sendLinkOnForgottenPassword(){
    if(this.forgottenPasswordForm.invalid)
    {
      this.forgottenPasswordForm.markAllAsTouched();
      return;
    }
    this.forgottenPasswordStage = 2;
  }
}
