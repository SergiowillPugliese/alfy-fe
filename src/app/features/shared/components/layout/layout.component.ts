import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LayoutService, LayoutSignal } from '../../services/layout.service';
import { LeftMenu } from '../../model/leftMenu.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [CommonModule, IonicModule, RouterModule],
})
export class LayoutComponent {
  private layoutService = inject(LayoutService);
  private route = inject(ActivatedRoute);

  title = computed(() => this.layoutService.title());
  leftMenu = signal<LeftMenu[]>([]);

  constructor() {
    this.leftMenu.set([
      new LeftMenu().withLabel('Home').withLink('/home'),
      new LeftMenu().withLabel('Liste della spesa').withLink('/'),
    ]);
  }
}
