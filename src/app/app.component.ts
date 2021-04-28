import {Component, Injector, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {createCustomElement} from '@angular/elements';
import {AuthorizedLinksComponent} from './components/navbar-links/authorized-links/authorized-links.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ispit-online-narucivanje';
  constructor(private  translate: TranslateService, injector: Injector) {
  }

  ngOnInit(): void {
   this.translate.setDefaultLang('en');
  }

}
