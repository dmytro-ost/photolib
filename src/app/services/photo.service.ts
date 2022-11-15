import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private readonly baseUrl: string = 'https://picsum.photos';
  private readonly PHOTO_LIST_SIZE = 6;
  private currentId = 0;

  public getPhotoList(quantity: number = this.PHOTO_LIST_SIZE): Observable<string[]> {
    return of(new Array(quantity).fill(0).map(() => `${this.baseUrl}/id/${this.currentId++}/200/300`))
      .pipe(delay(this.getRandomInt(200, 300)))
  }

  public getPhotoById(id: string): Observable<string> {
    return of(`${this.baseUrl}/id/${id}/200/300`);
  }

  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

}
