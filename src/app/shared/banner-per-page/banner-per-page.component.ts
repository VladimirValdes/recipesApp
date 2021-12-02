import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner-per-page',
  templateUrl: './banner-per-page.component.html',
  styleUrls: ['./banner-per-page.component.scss']
})
export class BannerPerPageComponent implements OnInit {

  // @ViewChild('asImage') image!: ElementRef;

  @Input() banner = {
    title: '',
    desc: ''
  }

  constructor( private renderer2: Renderer2) { }

  ngOnInit(): void {
  }

}
