import { Component, inject} from '@angular/core';
import { PrimaryBtnComponent } from '../primary-btn/primary-btn.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryBtnComponent,RouterLink],
  templateUrl: './header.component.html',
  styles: '',
})
export class HeaderComponent {

  cartService = inject(CartService);
  showclicked(){
    console.log('show clicked');
  }
}
