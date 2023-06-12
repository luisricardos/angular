import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables',
  template: `<p>
                <input style='margin-right: 5px' type="text" #myInput>
                <button (click)="logMessage(myInput.value)">Log</button><br><br>

                <label [hidden]="isHidden" style='font-style: italic; color: #90EE90'>O texto que vc digitou previamente foi:</label><br>
                <span>{{insertText}}</span>
             </p>`,
  styleUrls: ['./template-reference-variables.component.css']
})
export class TemplateReferenceVariablesComponent {
    public insertText:string;
    public isHidden:string;

    constructor() {
      this.insertText = "";
      this.isHidden = "hidden";
    }

    logMessage(value: string) {
      if(value.length > 0) {
        this.isHidden = "";
        this.insertText = value;
      }
    }
}
