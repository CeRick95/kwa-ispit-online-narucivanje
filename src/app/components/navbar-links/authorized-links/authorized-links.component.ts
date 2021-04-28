import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-authorized-links',
  templateUrl: './authorized-links.component.html',
  styleUrls: ['./authorized-links.component.scss']
})
export class AuthorizedLinksComponent implements OnInit {
  @Input() show: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
