import { Component, inject, Injector, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'src/app/features/shared/module/ionic.module';
import { ActivatedRoute } from '@angular/router';
import {
  LayoutService,
  LayoutSignal,
} from 'src/app/features/shared/services/layout.service';
import { ShoppingItem } from 'src/app/core/domains/shopping-list/entities/shopping.item';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ShppingListItemUseCase } from 'src/app/core/applications/shopping-list-use-case/shopping-list-item.usecase';
import { tap } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  providers: [ShppingListItemUseCase],
})
export class ShoppingListPage implements OnInit {
  private route = inject(ActivatedRoute);
  private layoutService = inject(LayoutService);
  private shoppingListItemUseCase = inject(ShppingListItemUseCase);
  private injector = inject(Injector);
  private fb = inject(FormBuilder);

  shoppingList = toSignal(this.shoppingListItemUseCase.get(), {
    injector: this.injector,
    initialValue: [] as ShoppingItem[],
  });

  isModalOpen = false;
  formGroup!: FormGroup;

  constructor() {
    addIcons({ add });

    this.formGroup = this.fb.group({
      name: [],
    });
  }

  ngOnInit() {
    this.layoutService.updateSignal(
      LayoutSignal.TITLE,
      String(this.route.snapshot.routeConfig?.title || '')
    );
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  addShoppingList() {}

  openShoppingList(shoppingList: any) {
    console.log('sono aperto');
  }
}
