import { Component } from '@angular/core';
import { ActivationEnd, Event, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipesApp';
  
  routeName: string = '';
  tituloSubs$: Subscription;

  constructor( private route: Router) {
    this.tituloSubs$ =  this.getArgumentosRutas()
                            .subscribe( ( { title }) => {
                              this.routeName = title;
                              document.title = `RecipeApp - ${ title }`;
                            });

  }

  getArgumentosRutas() {
    return this.route.events
       .pipe(
         filter( ( event ): event is ActivationEnd => event instanceof ActivationEnd ),
         filter( ( event: ActivationEnd ) => event.snapshot.firstChild === null ),
         map( ( event: ActivationEnd ) => event.snapshot.data )
       )
  }

  ngOnDestroy(): void {
     this.tituloSubs$.unsubscribe();
 }


  onActive( event: Event ) {
    // console.log(event)
    window.scroll(0,0);
  }
}
