import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @ViewChild('productID') productID: ElementRef<HTMLDivElement>;
  @Input() img: string;
  @Input() title: string;
  @Input() description: string;
  @Input() price: number;
  @Input() productId: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onClick(event: Event): void{
    // tslint:disable-next-line:radix
    const id = parseInt(this.productID.nativeElement.getAttribute('value'));
    console.log(id);
    if (id) { this.cartService.addToCart(id); }

    console.log(localStorage.getItem('cart'));
  }

}
