import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosListComponent {
  @Input() photos: Photo[] = [];
  @Output() photoClick = new EventEmitter<string>();

  public onClick(id: string): void {
    this.photoClick.emit(id);
  }
}
