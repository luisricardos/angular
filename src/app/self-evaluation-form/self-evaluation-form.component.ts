import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-self-evaluation-form',
  templateUrl: './self-evaluation-form.component.html',
  styleUrls: ['./self-evaluation-form.component.css']
})
export class SelfEvaluationFormComponent {
  userName = 'hello-world';
}
