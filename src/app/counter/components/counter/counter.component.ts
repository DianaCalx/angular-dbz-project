import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <h3>{{ counter }}</h3>
    <button (click)="increaseBy()">+1</button>
    <button (click)="decreaseBy(2)">-2</button>
    <button (click)="reset()">Reset</button>`,
})
export class CounterComponent {
  public counter: number = 0;

  increaseBy(): void {
    this.counter += 1;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }

  reset(): void {
    this.counter = 0;
  }
}
