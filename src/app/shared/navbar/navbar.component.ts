import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/service/auth.service";

export interface MenuItems {
  name: string
  path: string
  isActive: boolean
  needLogin?: boolean
}

const items : MenuItems[] = [
  {
    path: "",
    name: "home",
    isActive: false
  },
  {
    path: "/login",
    name: "login",
    isActive: false,
    needLogin: false
  },
  {
    path: "/list",
    name: "list",
    isActive: false,
    needLogin: true
  }
]

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(public authservice: AuthService) { }

  ngOnInit(): void {
    this.items = items;
  }

  items ?: MenuItems[]
}
