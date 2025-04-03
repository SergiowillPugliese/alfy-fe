import { Injectable, inject, signal, computed, Injector } from '@angular/core';
import { ShoppingItem } from '../../domains/shopping-list/entities/shopping.item';
import { catchError, filter, map, Observable, of, take, tap } from 'rxjs';
import { ToastService } from 'src/app/features/shared/services/toast.service';
import { ShoppingListRepository } from 'src/app/infrastructure/shopping-list-repository-impl/shopping-list.repository';
import { merge, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ShoppingListItemUseCase {
  private repository = inject(ShoppingListRepository);
  private toastService = inject(ToastService);

  private _shoppingList = signal<ShoppingItem[]>([]);
  shoppingList = computed(() => this._shoppingList());

  async loadShoppingList() {
    const result = await firstValueFrom(this.repository.get());
    if (result.success) {
      this._shoppingList.set(result.data);
    } else {
      this.toastService.showToast(result.message, 'error');
    }
  }

  async add(item: ShoppingItem) {
    const result = await firstValueFrom(this.repository.add(item));
    if (result.success) {
      await this.loadShoppingList();
      this.toastService.showToast(result.message, 'success');
    } else {
      this.toastService.showToast(result.message, 'error');
    }
  }
}
