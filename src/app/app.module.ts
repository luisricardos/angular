import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelfEvaluationFormComponent } from './self-evaluation-form/self-evaluation-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { InteractionComponent } from './interaction/interaction.component';
import { StyleTestComponent } from './style-test/style-test.component';

@NgModule({
  declarations: [
    AppComponent,
    SelfEvaluationFormComponent,
    InterpolationComponent,
    InteractionComponent,
    StyleTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
