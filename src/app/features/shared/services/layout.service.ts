import { computed, Injectable, signal } from '@angular/core';

export enum LayoutSignal {
  TITLE = 'TITLE',
}

type SignalValues = {
  [LayoutSignal.TITLE]: string;
};

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private _title = signal('');
  public readonly title = computed(() => this._title());

  public updateSignal<K extends LayoutSignal>(
    signalKey: K,
    value: SignalValues[K]
  ): void {
    switch (signalKey) {
      case LayoutSignal.TITLE:
        this.setSignalValue(this._title, value);
        break;
      default:
        console.warn(`Signal ${signalKey} non gestito`);
    }
  }

  protected setSignalValue<T>(
    signalRef: ReturnType<typeof signal<T>>,
    value: T
  ): void {
    signalRef.set(value);
  }
}
