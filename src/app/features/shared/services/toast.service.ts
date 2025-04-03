import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  showToast(message: string, type: 'success' | 'warning' | 'error') {
    console.log(message);
  }
}
