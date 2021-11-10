import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  alphabetAr: string[] = [];

  constructor() { }

  ngOnInit(): void {

    this.alphabetAr = this.alphabet.split('');

  
  }

}
