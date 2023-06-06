import { Component } from '@angular/core';

@Component({
  selector: 'app-interaction',
  template: `
            <input type="text" class="inputClass" id="includePhrase" [disabled]="isDisabledText" oninput="checkContent(this)">
            <button id="btnTest" [disabled]="isDisabledButton" type="button" onclick="enableDisable()"> Disable Test</button>
  `,
  styles: [`
  .inputClass {
    width: 200px;
    margin-right: 20px;
  }

  .styled {
    border: 0;
    line-height: 2.5;
    padding: 0 20px;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
    background-color: rgba(220, 0, 0, 1);
    background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);
}

.styled:hover {
    background-color: rgba(255, 0, 0, 1);
}

.styled:active {
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6), inset 2px 2px 3px rgba(0, 0, 0, 0.6);
}
`]
})
export class InteractionComponent {
  public isDisabledButton = false;
  public isDisabledText = true;

  constructor() {}

  enableDisable() {
    this.isDisabledText = true;
  };

  checkContent(e: any) {
    if (e.maxlength > 0) {
      console.log('input text content', e)
      this.isDisabledButton = true;
    }
  };
}
