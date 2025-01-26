import { Component,inject,input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { PrimaryBtnComponent } from '../../../components/primary-btn/primary-btn.component';
import { CartService } from '../../../services/cart.service';
@Component({
  selector: 'app-product-card',
  imports: [PrimaryBtnComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  product =input.required<Product>()

  cartService = inject(CartService);

}
