import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Output('page') changePage: EventEmitter< number > = new EventEmitter();
  @Input('itemsP') items: number = 0;
  @Input('lastItem') lastItem : boolean = false;

  page = 0;
  constructor() { }

  ngOnInit(): void {
  }

  
  nextPage() {
    if ( !this.lastItem ) {
      this.page += this.items;
      this.changePage.emit(this.page);
    } 
      
   
    
  }

  prevPage() {
    if ( this.page > 0) {

       this.page -= this.items;
      this.changePage.emit(this.page);

      
    }


  }

  ngOnChanges(changes: SimpleChanges): void {
    if ( changes.lastItem && changes.lastItem.currentValue ) {

      console.log(`On changes ${ changes.lastItem.currentValue}`)
    } 
  }

}
