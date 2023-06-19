import { Component,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
   @Input('message') public name: any;
   @Input('item') newAlias = '';
   @Output() public childEvent = new EventEmitter();
    fromChild ='';

   constructor () {
   }

   fireEvent(e: any) {
    this.fromChild = e.value;
    console.log(e);
    console.log(e.value);
    this.childEvent.emit(this.fromChild);
   }
}
