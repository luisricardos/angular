import { Component } from '@angular/core';

@Component({
  selector: 'app-for-component',
  template: `<div *ngFor="let color of colors; index as i;first as f, last as l, odd as o, even as e">
                <h2>{{i}} - {{color}} - first element? {{f}} | last element? {{l}} | odd index? {{o}} | even index? {{e}}</h2>
             <div>`,
  styleUrls: ['./for-component.component.css']
})
export class ForComponentComponent {
      public colors = ["red", "blue", "green", "yellow"];
}
