import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedDataService {
  
  private static _instance: SharedDataService;

  public userName = signal<string>('Guest');

  constructor() {
    if (!SharedDataService._instance) {
      SharedDataService._instance = this;
    }
    return SharedDataService._instance;
  }

  updateName(newName: string) {
    this.userName.set(newName);
  }
}
