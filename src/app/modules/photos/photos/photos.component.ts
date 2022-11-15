import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Photo } from 'src/app/models/photo.model';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  public photos: Photo[] = [];

  constructor(
    private readonly photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.loadPhotos();
  }

  public onPhotoClick(photoId: string) {
    console.log(photoId);
  }

  public onScrollDown() {
    this.loadPhotos();
  }

  private loadPhotos() {
    this.photoService.getPhotoList()
      .pipe(first())
      .subscribe(photos => this.photos = [...this.photos, ...photos]);
  }
}
