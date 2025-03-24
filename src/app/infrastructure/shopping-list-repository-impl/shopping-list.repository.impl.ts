import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { ShoppingItem } from 'src/app/core/domains/shopping-list/entities/shopping.item';
import {
  SHOPPING_ITEM_REPOSITORY,
  ShoppingItemRepository,
} from 'src/app/core/domains/shopping-list/repository/shopping-item.repository';
import { BaseResponseInterface } from 'src/app/features/shared/interface/base-responce.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class ShoppingListRepositoryImpl implements ShoppingItemRepository {
  private http = inject(HttpClient);

  private readonly baseUrl = environment.BASE_URL;

  add(item: ShoppingItem): Observable<void> {
    return of();
  }

  get(): Observable<BaseResponseInterface<ShoppingItem[]>> {
    return this.http.get<BaseResponseInterface<ShoppingItem[]>>(
      `${this.baseUrl}/shopping-list`
    );
  }

  remove(id: string): Observable<void> {
    localStorage.removeItem(id);
    return of();
  }

  toggleBought(id: string): Observable<void> {
    return of();
  }
}
