import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private STORAGE_KEY = 'photo_lib';

  getData() {
    return JSON.parse(window.localStorage.getItem(this.STORAGE_KEY) || '{}');
  }

  setData(payload: any) {
    window.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(payload));
  }
}
