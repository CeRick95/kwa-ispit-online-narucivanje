import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() price: number;
  @Input() sizeOfProduct: number;
  @Input() productId: number;
  @Input() img: string;
  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  increment(event: Event): void{
    event.preventDefault();
    this.input.nativeElement.stepUp();
    this.cartService.addToCart(this.productId);
  }

  decrement(event: Event): void{
    event.preventDefault();
    this.input.nativeElement.stepDown();
    this.cartService.removeFromCart(this.productId);
  }

}
