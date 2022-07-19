import { Component, OnInit } from '@angular/core';

export interface MenuItems {
  name: string
  path: string
  isActive: boolean
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
    isActive: false
  },
  {
    path: "/list",
    name: "list",
    isActive: false
  }
]

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.items = items;
  }

  items ?: MenuItems[]
}
