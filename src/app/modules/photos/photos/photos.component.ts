import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Photo } from 'src/app/models/photo.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent implements OnInit {
  public photos: Photo[] = [];

  constructor(
    private readonly photoService: PhotoService,
    private readonly localStorage: LocalStorageService,
    private readonly cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadPhotos();
  }

  public onPhotoClick(photoId: string) {
    const storage = this.localStorage.getData();
    if (!storage.hasOwnProperty('favorites')) {
      storage.favorites = [];
    }
    storage.favorites.push(photoId);
    storage.favorites = [...new Set(storage.favorites)];
    this.localStorage.setData(storage);
  }

  public onScrollDown() {
    this.loadPhotos();
  }

  private loadPhotos() {
    this.photoService.getPhotoList()
      .pipe(first())
      .subscribe(photos => {
        this.photos = [...this.photos, ...photos];
        this.cdr.markForCheck();
      });
  }
}
