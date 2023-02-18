import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootertextComponent } from './footertext.component';

describe('FootertextComponent', () => {
  let component: FootertextComponent;
  let fixture: ComponentFixture<FootertextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootertextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootertextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
