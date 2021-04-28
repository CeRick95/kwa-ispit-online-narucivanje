import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousLinksComponent } from './anonymous-links.component';

describe('AnonymousLinksComponent', () => {
  let component: AnonymousLinksComponent;
  let fixture: ComponentFixture<AnonymousLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnonymousLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
