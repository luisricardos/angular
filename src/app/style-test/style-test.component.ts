import { Component } from '@angular/core';

@Component({
  selector: 'app-style-test',
  template: `
    <h2>Nosotros iremos lograr exito</h2>

    <h2 [class]="sucessClass">Trabajo, Trabajo, Trabajo - Classe dinâmica</h2>
    <h2 [class.text-danger]="hasError">Vai dar certo - Classe condicional</h2>
    <h2 [ngClass]="messageClasses">NgClass Directive for adding multiple classes</h2>
  `,
  styles: [`
      .text-sucess {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
  `]
})
export class StyleTestComponent {
  public sucessClass = "text-sucess"
  public hasError = false
  public isSpecial = true;
  public messageClasses = {
    "text-sucess": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
}
