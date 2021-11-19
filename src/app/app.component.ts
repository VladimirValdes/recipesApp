import { Component } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipesApp';

  onActive( event: Event ) {
    // console.log(event)
    window.scroll(0,0);
  }
}
