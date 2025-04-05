import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LayoutService } from '../../services/layout.service';
import { LeftMenu } from '../../model/leftMenu.model';
import { SUBMENU_ENVIRONMENT } from 'src/environments/submenu.environment';
import { DomainOptions } from '../../model/domainOptions.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [CommonModule, IonicModule, RouterModule],
})
export class LayoutComponent implements OnInit {
  private layoutService = inject(LayoutService);
  private router = inject(Router);

  title = computed(() => this.layoutService.title());
  leftMenu = signal<LeftMenu[]>([]);
  domainOptionsMenu = signal<DomainOptions[]>([]);

  domainOptions = new Map<string, DomainOptions[]>([
    ['/shopping-list', SUBMENU_ENVIRONMENT.shoppingList],
  ]);

  constructor() {
    this.leftMenu.set([
      new LeftMenu().withLabel('Home').withLink('/home'),
      new LeftMenu().withLabel('Liste della spesa').withLink('/shopping-list'),
    ]);
  }

  ngOnInit(): void {
    this.updateDomainOptions(this.router.url);
  }

  setDomainOptions(item: string) {
    this.updateDomainOptions(item);
  }

  private updateDomainOptions(url: string) {
    // Se l'URL inizia con /shopping-list, mostra sempre il menu shoppingList
    const options = url.startsWith('/shopping-list') 
      ? SUBMENU_ENVIRONMENT.shoppingList 
      : this.domainOptions.get(url) || [];
    this.domainOptionsMenu.set(options);
  }
}
