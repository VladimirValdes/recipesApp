import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss'
  ]
})
export class HeaderComponent implements OnInit {


 @ViewChild('iconM')iconMenu!:ElementRef;
  activeM = false;
  menu = [
    'home',
    'discover',
    'categories',
    'recipes'

  ]

  constructor() { }

  ngOnInit(): void {
    
   
  }

  activeMenu(  ): void {
    const iconM = this.iconMenu.nativeElement;

    if ( iconM.offsetParent !== null) {
      
      this.activeM = !this.activeM;
    }
   

  }



}
