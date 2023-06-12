import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `<p>
                <input [(ngModel)]="name" type="text">  <br>
                {{name}}
             </p>`,
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  public name: string;

  constructor() {
    this.name = "";
  }
}
