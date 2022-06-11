import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCodethierComponent } from './ngx-codethier.component';

describe('NgxCodethierComponent', () => {
  let component: NgxCodethierComponent;
  let fixture: ComponentFixture<NgxCodethierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCodethierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCodethierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
