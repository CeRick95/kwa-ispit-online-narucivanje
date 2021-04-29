import {AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Store} from '@ngrx/store';
import {CartItemComponent} from '../../../components/products/cart-item/cart-item.component';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit, AfterViewInit {
  @Input() sizeOfCart: number;
  @Input() sumPrice: number;
  @ViewChild('dynamicHolder', { read: ViewContainerRef }) dynamicHolder: ViewContainerRef;
  componentFactory: any;
  constructor(private cartService: CartService, private store: Store<any>, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.store.pipe(take(1)).subscribe(state => {
      this.sizeOfCart = state.cartState.length;
      return;
    });
  }

  ngAfterViewInit(): void {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(CartItemComponent);
    this.store.subscribe(async state => {
      this.sizeOfCart = state.cartState.length;
      const map = new Map();
      state.cartState.forEach(productId => {
        map.set(productId, 0);
      });
      state.cartState.forEach(productId => {
        map.set(productId, map.get(productId) + 1);
      });
      let sumCost = 0;
      sumCost = await this.cartService.getProductsFromArray(state.cartState).then(
        data => {
          this.dynamicHolder.clear();
          for (const [key, value] of map.entries()) {
            const filtered = data.filter( by =>  by.id === key);
            if ( filtered.length === 1 ){
              const product = filtered[0];
              sumCost = sumCost + value * product.price;
            }
          }
          data.sort().forEach(product => {
                const item = this.dynamicHolder.createComponent(this.componentFactory).instance as CartItemComponent;
                item.description = product.description;
                item.title = product.title;
                item.price = product.price;
                item.sizeOfProduct = map.get(product.id);
                item.productId = product.id;
                item.img = product.img;
              }
            );
          return sumCost;
          },
        error => {
          console.error(error);
          return 0;
        });
      this.sumPrice = sumCost;
    });
  }

}
