import { CommonModule } from '@angular/common';
import { Component, inject, Input, input, OnInit } from '@angular/core';
import { IonicModule } from '../../module/ionic.module';
import { ModalController } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent<T> implements OnInit {
  private modalCtrl = inject(ModalController);

  data = input<T>();
  title = input<string>();
  isEditable = input<boolean>();

  name!: string;

  constructor() { }

  ngOnInit() {
    console.log('data', this.data());
    console.log('typeof data', typeof this.data());
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  getListLength(): number {
    return (this.data() as any)?.list?.length || 0;
  }

}
