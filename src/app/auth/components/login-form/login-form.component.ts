import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  constructor(private fb : FormBuilder , private authservice : AuthService) { }

  ngOnInit(): void {

  }

  appLoginControl = this.fb.group({
    name:['' , [Validators.required , Validators.minLength(1) , Validators.maxLength(16)]],
    pswd:['' , [Validators.required , Validators.minLength(3)]]
  })

  async handleSubmit(){
    console.log(this.appLoginControl)

    let username = this.appLoginControl.controls['name'].value;
    let password = this.appLoginControl.controls['pswd'].value;

    if(this.appLoginControl.status === "INVALID")return

    console.log(this.appLoginControl)
    let user = await this.authservice.login(username , password);
    console.log(user)
    if(user.length === 0 || user[0].password !== password)return

    this.authservice.islogged = true;
  }

}
