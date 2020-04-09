import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsMenuComponent } from './cards-menu.component';

describe('CardsMenuComponent', () => {
  let component: CardsMenuComponent;
  let fixture: ComponentFixture<CardsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
