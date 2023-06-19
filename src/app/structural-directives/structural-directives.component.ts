import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css','./structural-directives.component2.css']
})
export class StructuralDirectivesComponent {
    public displayLine: boolean = false;
    public displayLineOne: boolean = false;
    public displayBlock: boolean = false;

    onDropDownChange(dropDownValue: any) {
        if(dropDownValue.target.value == 1) {
          this.displayLine = true;

          this.setFocusOnDivWithId("newLine");
        } else {
          this.displayLine = false;
        }
    };

    onDropDownChange2(dropDownValue: any) {
      if(dropDownValue.target.value == 1) {
        this.displayLineOne = true;

        this.setFocusOnDivWithId("lines");
      } else {
        this.displayLineOne = false;
      }
  };

  onDropDownChange3(dropDownValue: any) {
    if(dropDownValue.target.value == 1) {
      this.displayBlock = true;

      this.setFocusOnDivWithId("BlockSwitch");
    } else {
      this.displayBlock = false;
    }
};

    setFocusOnDivWithId(elementId: string)
    {
         if (elementId== null || elementId == undefined) {
            elementId = "";
         }
         const element = document.getElementById(elementId)!;
         element.scrollIntoView(true);
    };
}
