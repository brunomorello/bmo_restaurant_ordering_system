import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemFoodComponent } from './menu-item-food.component';

describe('MenuItemFoodComponent', () => {
  let component: MenuItemFoodComponent;
  let fixture: ComponentFixture<MenuItemFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
