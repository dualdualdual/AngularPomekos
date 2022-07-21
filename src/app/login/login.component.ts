import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent  {
  users:Login[]=[];
  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder,private readonly dsv:DataService,private readonly router : Router) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
    this.dsv.getUsers()
    .subscribe(res => {
      console.log(res);
      this.users =  res;
       })


  }

initForm(): FormGroup {
    return this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
}
sesion!:Login;
error = false;
onSubmit(){
  let userinput =  this.contactForm.value.username;
  let passinput =  this.contactForm.value.password;
for(let user of this.users){
  if(user.name === userinput && user.password === passinput){
    sessionStorage.setItem('usuario',user.id);
    this.router.navigate(['home']);
  }
}
this.error = true;
}
}

export interface Login {
  createdAt: Date;
  name:      string;
  password:  string;
  id:        string;
}
