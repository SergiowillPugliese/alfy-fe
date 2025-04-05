import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { LayoutService, LayoutSignal } from 'src/app/features/shared/services/layout.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.page.html',
  styleUrls: ['./favorite-products.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FavoriteProductsPage {
  private layoutService = inject(LayoutService);
  private route = inject(ActivatedRoute);
  
  constructor() {
  }

  ionViewWillEnter() {
    this.layoutService.updateSignal(
      LayoutSignal.TITLE,
      String(this.route.snapshot.routeConfig?.title || '')
    );
  }

}
