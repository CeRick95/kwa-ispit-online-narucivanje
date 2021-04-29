import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef, Injector,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import axios from 'axios';
import {CardComponent} from '../../../components/products/card/card.component';
import {createCustomElement, NgElement, WithProperties} from '@angular/elements';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, AfterViewInit {

  @Input() products: any;
  @ViewChild('holder') holder: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    axios.get('http://localhost:3000/products').then(response => {
      const array = response.data;
      const numberOfRows = Math.floor(array.length / 3);
      const numOfElements = array.length;
      let  counterOfElements = 0;
      for (let i = 0; i < numberOfRows; i++){
        const div = this.renderer.createElement('div');
        div.setAttribute('class', 'row');
        for (let j = 0; j < 3; j++){
          const card =  this.renderer.createElement('app-card') as NgElement & WithProperties<CardComponent>;
          card.className = 'col-md-4';
          card.productId = array[counterOfElements].id;
          card.img = array[counterOfElements].img;
          card.title = array[counterOfElements].title;
          card.description = array[counterOfElements].description;
          card.price = array[counterOfElements].price;
          this.renderer.appendChild(div, card);
          counterOfElements++;
        }
        const br = this.renderer.createElement('br');
        this.renderer.appendChild(this.holder.nativeElement, div);
        this.renderer.appendChild(this.holder.nativeElement, br);
      }
      if (array.length % 3 !== 0 ){
        const div = this.renderer.createElement('div');
        div.setAttribute('class', 'row');
        for (let j = counterOfElements; j < numOfElements; j++){
          const card =  this.renderer.createElement('app-card') as NgElement & WithProperties<CardComponent>;
          card.className = 'col-md-4';
          card.productId = array[counterOfElements].id;
          card.img = array[counterOfElements].img;
          card.title = array[counterOfElements].title;
          card.description = array[counterOfElements].description;
          card.price = array[counterOfElements].price;
          this.renderer.appendChild(div, card);
          counterOfElements++;
        }
        this.renderer.appendChild(this.holder.nativeElement, div);
      }

      console.log(this.holder.nativeElement);
    }, error => {
      console.log(error);
    });
  }

}
