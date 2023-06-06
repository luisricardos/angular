import { Component, OnInit } from '@angular/core';

@Component({
  selector: './app-interpolation',
  template: `
                <div>
                    <b>Temperatura em fahrenheit: {{fahrenheit}} </b>
                </div>`,
  styleUrls: ['./interpolation.component.css']
})

export class InterpolationComponent implements OnInit {
  celsiusTemperature: number;
  convertionRate: number;
  valueSum = 32;
  fahrenheit: number;

  myName= 'Luis Silva';

  constructor () {
    this.celsiusTemperature = 24;
    this.convertionRate = 9/5;
    this.fahrenheit = 0;
  }

  ngOnInit(): void {
    this.convertTemperature();
  }

  convertTemperature() {
      this.fahrenheit = (this.celsiusTemperature * this.convertionRate) + this.valueSum;
  }
}
