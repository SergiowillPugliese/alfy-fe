import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  showToast(message: string, type: 'succes' | 'warning' | 'error') {
    console.log(message);
  }
}
