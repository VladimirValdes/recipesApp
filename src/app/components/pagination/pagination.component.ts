import { Component, EventEmitter, Input,  OnInit, Output } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output('page') changePage: EventEmitter< number > = new EventEmitter();
  @Input('itemsP') items: number = 0;
  @Input('totalItems') totalItems = 0;

  @Input() icon: SweetAlertIcon = 'info';
  @Input() title = '';
  @Input() desc = '';

  page = 0;
  disabledNext = false;
  total = 0;
  constructor( private alertService: AlertService) { }


  

  ngOnInit(): void {
    this.total = this.items;
  }


  
  nextPage() {


    
  
    if ( this.total < this.totalItems) {
        this.total += this.items;
        this.page += this.items;
        this.changePage.emit(this.page);

    } else {
      this.showAlert();
    }

  }

  prevPage() {
    

    if ( this.page > 0) {
        this.total -= this.items;
        this.page -= this.items;
        this.changePage.emit(this.page);
        this.disabledNext = false;
    }



  }

  showAlert() {
 
    this.alertService.showAlert( this.title, this.desc, this.icon );
    this.disabledNext = true;
  }



}
