import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import {
  LayoutService,
  LayoutSignal,
} from 'src/app/features/shared/services/layout.service';
import { add } from 'ionicons/icons';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ShoppingListItemUseCase } from 'src/app/core/applications/shopping-list-use-case/shopping-list-item.usecase';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  providers: [ShoppingListItemUseCase],
})
export class ShoppingListPage {
  private route = inject(ActivatedRoute);
  private layoutService = inject(LayoutService);
  private shoppingListItemUseCase = inject(ShoppingListItemUseCase);
  private fb = inject(FormBuilder);
  private modalCtrl = inject(ModalController);

  shoppingList = this.shoppingListItemUseCase.shoppingList;
  shoppingListItemsModalData = {
    title: '',
    items: [],
  }

  isModalOpen = {
    addShoppingList: false,
    shoppingListItems: false,
  };
  formGroup!: FormGroup;

  constructor() {
    this.shoppingListItemUseCase.loadShoppingList();
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
    });
    addIcons({ add });
  }

  ionViewWillEnter() {
    this.layoutService.updateSignal(
      LayoutSignal.TITLE,
      String(this.route.snapshot.routeConfig?.title || '')
    );
  }

  setOpen(isOpen: boolean, type: 'addShoppingList' | 'shoppingListItems') {
    this.isModalOpen[type] = isOpen;
  }

  async addShoppingList() {
    if (this.formGroup.invalid) return;
    await this.shoppingListItemUseCase.add(this.formGroup.value);
    this.formGroup.reset();
    this.setOpen(false, 'addShoppingList');
  }

  openShoppingListItems(item: any) {
    console.log(item);
    this.shoppingListItemsModalData.title = item.name;
    this.shoppingListItemsModalData.items = item.items;
    this.setOpen(true, 'shoppingListItems');
  }
}
