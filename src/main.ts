import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
  withViewTransitions,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { SHOPPING_ITEM_REPOSITORY } from './app/core/domains/shopping-list/repository/shopping-item.repository';
import { ShoppingListRepositoryImpl } from './app/infrastructure/shopping-list-repository-impl/shopping-list.repository.impl';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withViewTransitions()
    ),
    provideHttpClient(),
    { provide: SHOPPING_ITEM_REPOSITORY, useClass: ShoppingListRepositoryImpl },
  ],
});
