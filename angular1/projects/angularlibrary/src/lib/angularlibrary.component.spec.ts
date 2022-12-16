import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularlibraryComponent } from './angularlibrary.component';

describe('AngularlibraryComponent', () => {
  let component: AngularlibraryComponent;
  let fixture: ComponentFixture<AngularlibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularlibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
