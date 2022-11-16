import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { defer, of } from 'rxjs';
import { PhotosComponent } from './photos.component';
import { PhotoService } from 'src/app/services/photo.service';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  let localStorageService: LocalStorageService;
  let getPhotoListObservableSpy: jasmine.Spy;

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

    let testPhotosArray = [
      { id: '123', url: 'www.host.com/id/123/200/300' },
      { id: '654', url: 'www.host2.com/id/654/200/300' }];

    const photoServiceSpyObj = jasmine.createSpyObj('PhotoService', ['getPhotoList']);

    getPhotoListObservableSpy = photoServiceSpyObj.getPhotoList.and.returnValue(
      defer(() => of(testPhotosArray))
    );

    TestBed.configureTestingModule({
      declarations: [PhotosComponent],
      providers: [
        { provide: LocalStorageService, useValue: localStorageServiceStub },
        { provide: PhotoService, useValue: photoServiceSpyObj }
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

  it('should get photos via photoService.getPhotoList', (done: DoneFn) => {
    fixture.detectChanges();
    getPhotoListObservableSpy.calls.mostRecent().returnValue.subscribe(() => {
      fixture.detectChanges();
      expect(component.photos.length).toEqual(2);
      done();
    });
  });

});
