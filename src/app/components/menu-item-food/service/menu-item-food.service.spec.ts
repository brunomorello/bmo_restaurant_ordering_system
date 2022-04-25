import { TestBed } from '@angular/core/testing';

import { MenuItemFoodService } from './menu-item-food.service';

describe('MenuItemFoodService', () => {
  let service: MenuItemFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuItemFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
