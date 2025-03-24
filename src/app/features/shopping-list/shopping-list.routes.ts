import { Routes } from '@angular/router';
import { ShoppingListPage } from './pages/shopping-list/shopping-list.page';

export const SHOPPING_LIST_ROUTES: Routes = [
  {
    path: '',
    title: 'Liste della spesa',
    loadComponent: () =>
      import('./pages/shopping-list/shopping-list.page').then(
        (c) => c.ShoppingListPage
      ),
  },
];
