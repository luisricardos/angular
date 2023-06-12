import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
            <h2 [style.color]="hasError ? errorColor : sucessColor"> {{name}}</h2>
            <h2 [ngStyle]="hasError ? _error : _sucess"> {{name + ' 2'}}</h2>
  `,
  styles: []
})

export class StyleBindingComponent implements OnInit {
  public name: string;
  public hasError: boolean;
  public errorColor: string;
  public sucessColor: string;
  public _sucess: SucessStyle;
  public _error: ErrorStyle;

  constructor () {
    this.name = 'Luis Silva';
    this.hasError = false;
    this.errorColor = "red";
    this.sucessColor = "green";
    this._sucess = {
      color : "blue",
      fontStyle : "italic"
    }
    this._error = {
      color : "red",
      fontStyle : "bold"
    }
  }

   ngOnInit(): void {}

}

export interface SucessStyle {
  color?: string,
  fontStyle?: string
}

export interface ErrorStyle {
  color?: string,
  fontStyle?: string
}
