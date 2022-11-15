import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { FAVORITES_ROUTE } from 'src/app/app-routes';
import { Photo } from 'src/app/models/photo.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit {
  public photos: Photo[] = [];

  constructor(
    private readonly photoService: PhotoService,
    private readonly localStorage: LocalStorageService,
    private readonly cdr: ChangeDetectorRef,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.loadPhotos();
  }

  public onPhotoClick(photoId: string) {
    this.router.navigate([`photos/${photoId}`]);
  }

  private loadPhotos() {
    const storage = this.localStorage.getData();
    if (!storage.hasOwnProperty(FAVORITES_ROUTE)) {
      return;
    }

    this.photoService.getPhotoByIds(storage.favorites)
      .pipe(first())
      .subscribe(photos => {
        this.photos = photos;
        this.cdr.markForCheck();
      });
  }

}
