import { TestBed } from '@angular/core/testing';

import { MenuFoodService } from './menu-food.service';

describe('MenuFoodService', () => {
  let service: MenuFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
