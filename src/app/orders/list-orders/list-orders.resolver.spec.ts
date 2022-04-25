import { TestBed } from '@angular/core/testing';

import { ListOrdersResolver } from './list-orders.resolver';

describe('ListOrdersResolver', () => {
  let resolver: ListOrdersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListOrdersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
