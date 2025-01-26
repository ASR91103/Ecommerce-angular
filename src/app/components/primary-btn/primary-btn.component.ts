import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  imports: [],
  templateUrl: './primary-btn.component.html',
  styleUrl: './primary-btn.component.css'
})
export class PrimaryBtnComponent {
label = input('');

btnclicked = output();


HandleButtonClick(){
  this.btnclicked.emit();
}
}
