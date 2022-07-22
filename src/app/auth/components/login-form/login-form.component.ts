import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validator, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private fb : FormBuilder ,
    private authservice : AuthService,
    private router : Router) { }

  ngOnInit(): void {

  }

  appLoginControl = this.fb.group({
    name:['' , [Validators.required , Validators.minLength(1) , Validators.maxLength(16)]],
    pswd:['' , [Validators.required , Validators.minLength(3)]]
  })

  async handleSubmit(){
    let username = this.appLoginControl.controls['name'].value;
    let password = this.appLoginControl.controls['pswd'].value;

    if(this.appLoginControl.status === "INVALID")return

    let user = await this.authservice.login(username , password);

    if(user.length === 0 || user[0].password !== password)return

    this.authservice.islogged = true;

    this.router.navigateByUrl('/list')
  }

}
