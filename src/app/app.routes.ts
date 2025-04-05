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
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./features/home/home.page').then(m => m.HomePage)
      },
      {
        path: 'shopping-list',
        children: SHOPPING_LIST_ROUTES,
      },
    ],
  },
];
