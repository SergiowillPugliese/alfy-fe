import { Component, DestroyRef, inject, Injector, OnInit, signal, Signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
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
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ShoppingListItemUseCase } from 'src/app/core/applications/shopping-list-use-case/shopping-list-item.usecase';
import { ModalController } from '@ionic/angular/standalone';
import { ModalComponent } from 'src/app/features/shared/components/modal/modal.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  providers: [ShoppingListItemUseCase],
})
export class ShoppingListPage implements OnInit {
  private route = inject(ActivatedRoute);
  private layoutService = inject(LayoutService);
  private shoppingListItemUseCase = inject(ShoppingListItemUseCase);
  private injector = inject(Injector);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private modalCtrl = inject(ModalController);

  shoppingList = this.shoppingListItemUseCase.shoppingList;

  isModalOpen = false;
  formGroup!: FormGroup;

  constructor() {
    this.shoppingListItemUseCase.loadShoppingList();
    addIcons({ add });
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
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

  async addShoppingList() {
    if (this.formGroup.invalid) return;
    await this.shoppingListItemUseCase.add(this.formGroup.value);
    this.formGroup.reset();
    this.setOpen(false);
  }

  async openShoppingList(shoppingList: ShoppingItem) {
    console.log('shoppingList', shoppingList);
    const modal = await this.modalCtrl.create({
      component: ModalComponent<ShoppingItem>,
      componentProps: {
        data: signal(shoppingList.list),
        title: signal(shoppingList.name),
        isEditable: signal(true)
      },
      cssClass: 'modal-class',
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log('data', data);
    }
  }
}
