import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedLinksComponent } from './authorized-links.component';

describe('AuthorizedLinksComponent', () => {
  let component: AuthorizedLinksComponent;
  let fixture: ComponentFixture<AuthorizedLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizedLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
