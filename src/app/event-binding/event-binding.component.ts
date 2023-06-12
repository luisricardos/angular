import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `<h2> Please complete the sentence</h2>
             <div class='col-sm-4" style="margin-left: 10%"'>
                <label [style.color]="hasError ? errorColor : sucessColor" style='margin-right:5px'>Juan tiene un perrito muy</label>
                <span><input type="text" [disabled]="isDisabled"><br><br></span>
                <button (click)="greetEventHandler()">Greet</button><br>
                <button (click)="eventTypeEventHandler($event)">Event Type</button> <br>
                <button (click)="eventFull='Execution Error'">Event Full</button>

                <br><br>
                {{message}}<br>
                {{eventType}}<br>
                {{eventFull}}
             </div>`,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  public hasError: boolean;
  public errorColor: string;
  public sucessColor: string;
  public isDisabled: boolean;
  public message: string = "";
  public eventType = undefined;
  public eventFull:string = "";

  constructor() {
    this.hasError = false;
    this.errorColor = "red";
    this.sucessColor = "blue";
    this.isDisabled = false;
  }

  greetEventHandler(){
    this.hasError = true;
    this.isDisabled = true;
    this.message = 'Too bad! That is not correct | !Qué pena! Eso no esta correcto'
  }

  eventTypeEventHandler(event: any){
    this.eventType = event;
  }

}
