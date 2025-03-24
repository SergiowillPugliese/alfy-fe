import { Routes } from '@angular/router';
import { SHOPPING_LIST_ROUTES } from './features/shopping-list/shopping-list.routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/shared/components/layout/layout.component').then(
        (m) => m.LayoutComponent
      ),
    children: [
      {
        path: '',
        redirectTo: 'shopping-list',
        pathMatch: 'full',
      },
      {
        path: 'shopping-list',
        children: SHOPPING_LIST_ROUTES,
      },
    ],
  },
];
