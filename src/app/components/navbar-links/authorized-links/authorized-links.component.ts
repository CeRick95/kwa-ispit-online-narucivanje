import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-authorized-links',
  templateUrl: './authorized-links.component.html',
  styleUrls: ['./authorized-links.component.scss']
})
export class AuthorizedLinksComponent implements OnInit {
  @Input() show: boolean;
  @Input() sizeOfCart: number;
  constructor(private authService: AuthService, private store: Store<any>) { }

  ngOnInit(): void {
    this.store.subscribe(value => {this.sizeOfCart = value.cartState.length; });
  }

  logout(): void{
    this.authService.logout();
  }
}
