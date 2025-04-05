import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingListItemsPage } from './shopping-list-items.page';

describe('ShoppingListItemsPage', () => {
  let component: ShoppingListItemsPage;
  let fixture: ComponentFixture<ShoppingListItemsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
