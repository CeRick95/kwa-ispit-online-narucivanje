import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-anonymous-links',
  templateUrl: './anonymous-links.component.html',
  styleUrls: ['./anonymous-links.component.scss']
})
export class AnonymousLinksComponent implements OnInit {
  @Input() show: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
