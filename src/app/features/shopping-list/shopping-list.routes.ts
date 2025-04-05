import { Routes } from '@angular/router';
import { ShoppingListPage } from './pages/shopping-list/shopping-list.page';

export const SHOPPING_LIST_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        title: 'Liste della spesa',
        loadComponent: () =>
          import('./pages/shopping-list/shopping-list.page').then(
            (c) => c.ShoppingListPage
          ),
      },
      {
        path: 'favorite-products',
        title: 'Prodotti preferiti',
        loadComponent: () =>
          import('./pages/favorite-products/favorite-products.page').then(
            (c) => c.FavoriteProductsPage
          ),
      },
    ],
  },
];
