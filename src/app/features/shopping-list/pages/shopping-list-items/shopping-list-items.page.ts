import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { LayoutService, LayoutSignal } from 'src/app/features/shared/services/layout.service';

@Component({
  selector: 'app-shopping-list-items',
  templateUrl: './shopping-list-items.page.html',
  styleUrls: ['./shopping-list-items.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ShoppingListItemsPage {
  private layoutService = inject(LayoutService);
  private router = inject(Router);

  constructor() { }

  ionViewWillEnter() {
    const title = history.state?.['title'] || '';
    console.log('History state:', history.state);
    console.log('Title:', title);
    this.layoutService.updateSignal(LayoutSignal.TITLE, title);
  }
}
