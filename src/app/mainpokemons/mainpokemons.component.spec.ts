import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpokemonsComponent } from './mainpokemons.component';

describe('MainpokemonsComponent', () => {
  let component: MainpokemonsComponent;
  let fixture: ComponentFixture<MainpokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpokemonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainpokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
