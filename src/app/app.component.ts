import {AfterViewInit, Component, ComponentFactoryResolver, Injector, OnInit, ViewContainerRef} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CardComponent} from './components/products/card/card.component';
import {createCustomElement} from '@angular/elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ispit-online-narucivanje';
  constructor(private  translate: TranslateService, private injector: Injector) {
  }

  ngOnInit(): void {
   this.translate.setDefaultLang('en');
   const injector = this.injector;
   const cardElement = createCustomElement(CardComponent, {injector});
   customElements.define('app-card', cardElement);
  }


}
