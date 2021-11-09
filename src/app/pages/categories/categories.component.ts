import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  banner = {
    title: "Our Categories",
    desc: "Filter recipes throught differents categories that we have for you."
  }
  constructor() { }

  ngOnInit(): void {
  }

}
