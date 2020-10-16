import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  counter = 0;

  getCounterClass(){
    return 'badge badge-style badge-'+ (this.counter === 0 ? 'warning' : this.counter > 0 ? 'primary' : 'danger') 
  }

  onIncrement(){
    this.counter = this.counter + 1;
  }
  onReset(){
    this.counter = 0;
  }
  onDecrement(){
    this.counter = this.counter - 1;
  }
}
