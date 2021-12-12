import { AfterViewInit, Component, Renderer2  } from '@angular/core';
import { ActivationEnd, Event, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'recipesApp';
  
  routeName: string = '';
  tituloSubs$: Subscription;

  constructor( private route: Router,
               private renderer: Renderer2) {
    this.tituloSubs$ =  this.getArgumentosRutas()
                            .subscribe( ( { title }) => {
                              this.routeName = title;
                              document.title = `RecipeApp - ${ title }`;
                            });

  }
  ngAfterViewInit(): void {
    let loader = this.renderer.selectRootElement('#loader');
    this.renderer.setStyle(loader, 'display', 'none');
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
    window.scroll(0,0);
  }

}
