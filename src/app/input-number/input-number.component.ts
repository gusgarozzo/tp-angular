import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }

  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit(): void {
  }


  downQuantity(): void{
    if (this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    } 
  } 

  upQuantity(): void{
    if (this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit("Se alcanzó el límite disponible")
    }
  }

  onChangeQuantity(event) :void{
    if (event.target.value<0){
      event.target.value = event.target.value * (-1);
      this.quantity = event.target.value;
    }

    if (event.target.value>this.max){
      this.quantity = this.max;
    }
    this.quantityChange.emit(this.quantity);
  }
}
