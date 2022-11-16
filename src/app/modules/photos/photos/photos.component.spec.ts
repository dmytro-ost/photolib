import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalStorageService } from 'src/app/services/local-storage.service';

import { PhotosComponent } from './photos.component';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  let localStorageService: LocalStorageService

  beforeEach(() => {
    const localStorageServiceStub = {
      storage: {},
      getData: () => {
        return localStorageServiceStub.storage;
      },
      setData: (data: any) => {
        return localStorageServiceStub.storage = data;
      },
    };

    TestBed.configureTestingModule({
      declarations: [PhotosComponent],
      providers: [
        { provide: LocalStorageService, useValue: localStorageServiceStub }
      ]
    });

    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    localStorageService = TestBed.inject(LocalStorageService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add photo id to favorites in localstorage', () => {
    component.onPhotoClick('42');
    expect(localStorageService.getData().favorites).toEqual(['42']);
  });

  it('should call loadPhotos onInit', () => {
    const loadPhotosSpy = spyOn<any>(component, 'loadPhotos');
    fixture.detectChanges();
    expect(loadPhotosSpy).toHaveBeenCalled();
  });

  it('should call loadPhotos method from onScrollDown', () => {
    const loadPhotosSpy = spyOn<any>(component, 'loadPhotos');
    component.onScrollDown();
    expect(loadPhotosSpy).toHaveBeenCalled();
  });

});
