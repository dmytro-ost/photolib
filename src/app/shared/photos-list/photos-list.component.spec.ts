import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhotosListComponent } from './photos-list.component';
import { Photo } from 'src/app/models/photo.model';
import { first } from 'rxjs/operators';

describe('PhotosListComponent', () => {
  let component: PhotosListComponent;
  let fixture: ComponentFixture<PhotosListComponent>;
  let el: DebugElement;
  const photo: Photo[] = [{ id: '7', url: 'www.host.com/image.jpg' }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosListComponent]
    });

    fixture = TestBed.createComponent(PhotosListComponent);
    component = fixture.componentInstance;

    el = fixture.debugElement.query(By.css('.photos-list'));
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display image', () => {
    component.photos = photo;
    fixture.detectChanges();
    expect(el.children[0].nativeElement.src).toContain('www.host.com/image.jpg');
  });

  it('should raise photoClick event when photo clicked ', () => {
    let clickedId: string | undefined;
    component.photos = photo;
    fixture.detectChanges();
    component.photoClick.pipe(first()).subscribe((id: string) => (clickedId = id));
    el.children[0].nativeElement.click();

    expect(clickedId).toBe('7');
  });

});
