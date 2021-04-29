import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() currentLinks: boolean;
  currentUrl: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.router.events.subscribe(value =>
    {
      if (value instanceof NavigationEnd){
        console.log(value);
        if ( value.url !== this.currentUrl){
          this.currentLinks = localStorage.getItem('authToken') ? true : false;
          this.currentUrl = value.url;
        }
      }
    }
    );
  }

  redirectTo(): void{
    if (this.currentLinks){
      this.router.navigateByUrl('/dashboard', {skipLocationChange: false});
    }else {
      this.router.navigateByUrl('/', {skipLocationChange: true});
    }
  }

}
