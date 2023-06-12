import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelfEvaluationFormComponent } from './self-evaluation-form/self-evaluation-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { InteractionComponent } from './interaction/interaction.component';
import { StyleTestComponent } from './style-test/style-test.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    SelfEvaluationFormComponent,
    InterpolationComponent,
    InteractionComponent,
    StyleTestComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateReferenceVariablesComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
