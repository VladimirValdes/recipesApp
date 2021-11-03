import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss'
  ]
})
export class HeaderComponent implements OnInit {


  activeM = false;

  constructor() { }

  ngOnInit(): void {
  }

  activeMenu(): void {
    this.activeM = !this.activeM;
  }

}
