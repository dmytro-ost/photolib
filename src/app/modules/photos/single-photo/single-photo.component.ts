import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/models/photo.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SinglePhotoComponent implements OnInit {
  public photo!: Observable<Photo>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly photoService: PhotoService,
    private readonly router: Router,
    private readonly localStorage: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.photo = this.photoService.getFullPhotoById(this.activatedRoute.snapshot.params['id']);
  }

  public onRemove(photoId: string): void {
    const storage = this.localStorage.getData();
    if (storage.hasOwnProperty('favorites')) {
      storage.favorites = (storage.favorites as string[]).filter(id => id !== photoId);
      this.localStorage.setData(storage);
    }

    this.router.navigate(['favorites']);
  }

}
