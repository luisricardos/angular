import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchPlusTabComponent } from './switch-plus-tab.component';

describe('SwitchPlusTabComponent', () => {
  let component: SwitchPlusTabComponent;
  let fixture: ComponentFixture<SwitchPlusTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchPlusTabComponent]
    });
    fixture = TestBed.createComponent(SwitchPlusTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
