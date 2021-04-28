import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHelperPageComponent } from './angular-helper-page.component';

describe('AngularHelperPageComponent', () => {
  let component: AngularHelperPageComponent;
  let fixture: ComponentFixture<AngularHelperPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularHelperPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularHelperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
