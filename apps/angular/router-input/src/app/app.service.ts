import { Injectable, computed, inject, signal } from '@angular/core';

export const param = <T>() => {
  const service: AppService = inject(AppService);
  return computed(() => service.value());
};

@Injectable({ providedIn: 'root' })
export class AppService {
  value = signal<string>('');

  setValue(value: string): void {
    this.value.set(value);
  }
}
