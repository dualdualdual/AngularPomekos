import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit{
  sesion!:boolean;

  ngOnInit(): void {
    this.sesion = false;
  }

  title = 'AngularPomekos';
}
