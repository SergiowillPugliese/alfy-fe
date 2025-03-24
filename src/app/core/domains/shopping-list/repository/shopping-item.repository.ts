import { Observable } from 'rxjs';
import { ShoppingItem } from '../entities/shopping.item';
import { InjectionToken } from '@angular/core';
import { BaseResponseInterface } from 'src/app/features/shared/interface/base-responce.interface';

export interface ShoppingItemRepository {
  add(item: ShoppingItem): Observable<void>;
  get(): Observable<BaseResponseInterface<ShoppingItem[]>>;
  remove(id: string): Observable<void>;
  toggleBought(id: string): Observable<void>;
}

export const SHOPPING_ITEM_REPOSITORY =
  new InjectionToken<ShoppingItemRepository>('ShoppingItemRepository');
