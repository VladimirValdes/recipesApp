import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-per-page',
  templateUrl: './banner-per-page.component.html',
  styleUrls: ['./banner-per-page.component.scss']
})
export class BannerPerPageComponent implements OnInit {

  @Input() banner = {
    title: '',
    desc: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
