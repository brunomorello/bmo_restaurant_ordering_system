import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavSidebarComponent } from './header-nav-sidebar.component';

describe('HeaderNavSidebarComponent', () => {
  let component: HeaderNavSidebarComponent;
  let fixture: ComponentFixture<HeaderNavSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNavSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
