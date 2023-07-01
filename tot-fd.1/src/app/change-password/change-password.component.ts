import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changePassword : FormGroup ;
  status : boolean = false ;
  message : string ="" ;
  constructor(private formBuilder : FormBuilder)
  {
    this.changePassword = formBuilder.group(
                                    {
                                      currentPassword : new FormControl('',Validators.required),
                                      newPassword : new FormControl('',Validators.required),
                                      confirmPassword : new FormControl('',Validators.required)
                                    });
  }

  get currentPassword()
  {
    return this.changePassword.get('currentPassword');
  }
  get newPassword()
  {
    return this.changePassword.get('newPassword');
  }
  get confirmPassword()
  {
    return this.changePassword.get('confirmPassword');
  }

  save()
  {
    if(this.changePassword.invalid)
    {
      this.changePassword.markAllAsTouched();
      return;
    }
    this.status = true;
    this.message = "Password Changed Successfully";
  }

}
