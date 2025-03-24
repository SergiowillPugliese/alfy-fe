import { Injectable, Inject } from '@angular/core';
import {
  ShoppingItemRepository,
  SHOPPING_ITEM_REPOSITORY,
} from '../../domains/shopping-list/repository/shopping-item.repository';
import { ShoppingItem } from '../../domains/shopping-list/entities/shopping.item';
import { catchError, filter, map, Observable, of, tap } from 'rxjs';
import { ToastService } from 'src/app/features/shared/services/toast.service';

@Injectable()
export class ShppingListItemUseCase {
  constructor(
    @Inject(SHOPPING_ITEM_REPOSITORY)
    private repository: ShoppingItemRepository,
    private toastService: ToastService
  ) {}

  get(): Observable<ShoppingItem[]> {
    return this.repository.get().pipe(
      tap((res) => {
        if (!res.success) {
          this.toastService.showToast(res.message, 'error');
        }
      }),
      filter((res) => res.success),
      map((res) => res.data),
      catchError((error) => {
        this.toastService.showToast(error.message || 'Errore di rete', error);
        return of([]); // Puoi restituire un array vuoto o un altro valore
      })
    );
  }

  add(item: ShoppingItem): Observable<void> {
    return this.repository.add(item);
  }
}
