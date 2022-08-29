import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdaminComponent } from './sdamin.component';

describe('SdaminComponent', () => {
  let component: SdaminComponent;
  let fixture: ComponentFixture<SdaminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdaminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdaminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
