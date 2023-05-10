import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasDeMiComponent } from './mas-de-mi.component';

describe('MasDeMiComponent', () => {
  let component: MasDeMiComponent;
  let fixture: ComponentFixture<MasDeMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasDeMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasDeMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
