import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensHomeComponent } from './itens-home.component';

describe('HomeComponent', () => {
  let component: ItensHomeComponent;
  let fixture: ComponentFixture<ItensHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
