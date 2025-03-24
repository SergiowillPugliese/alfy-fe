import {
  IonContent,
  IonButton,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonList,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/angular/standalone';

import { NgModule } from '@angular/core';

export const ionicModuleArray = [
  IonContent,
  IonButton,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonList,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
];

@NgModule({
  imports: [...ionicModuleArray],
  exports: [...ionicModuleArray],
})
export class IonicModule {}
