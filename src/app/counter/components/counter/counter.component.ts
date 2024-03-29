import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{counter}}</h1>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetBy()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 20;

  increaseBy( value: number ):void {
    this.counter += value;
  }

  resetBy():void {
    this.counter = 20;
  }
}
