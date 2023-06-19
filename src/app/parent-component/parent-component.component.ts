import { Component, Input} from '@angular/core';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-parent-component',
  templateUrl:'./parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  public isDisableButton: boolean = true;
  currentItem = 'Television';
  public messageFromChild = ``;
  constructor (private toast: NgToastService ) {
  }

  lineThrough = '';

  checkContent(e: any) {
   if (e.target.value !== '' && e.target.value !== null && e.target.value !== undefined) {
      console.log('input text content', e);
      this.isDisableButton = false;
    }
  };

  cleanMessage(inputTextField: any) {
    this.toast.info(
      {
        detail: "Message has been sent to the child component",
        summary: 'Message sent',
        duration: 5000
      }
    );
    this.currentItem = inputTextField.value;
    console.log('conteúdo inputText', inputTextField.value);
    inputTextField.value = '';
    this.isDisableButton = true;
  };
}
