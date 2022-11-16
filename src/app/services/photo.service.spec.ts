import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';
import { SpinnerService } from './spinner.service';

describe('PhotoService', () => {
  let service: PhotoService;
  let myServiceSpy: jasmine.SpyObj<SpinnerService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('SpinnerService', ['show', 'hide']);

    TestBed.configureTestingModule({
      providers: [PhotoService, { provide: SpinnerService, useValue: spy }]
    });

    service = TestBed.inject(PhotoService);
    myServiceSpy = TestBed.inject(SpinnerService) as jasmine.SpyObj<SpinnerService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call show and hide spinner methods on getPhotoList', (done: DoneFn) => {
    service.getPhotoList().subscribe(() => {
      expect(myServiceSpy.show.calls.count()).toBe(1);
      expect(myServiceSpy.hide.calls.count()).toBe(1);
      done();
    });
  });

  it('should call show and hide spinner methods on getPhotoByIds', (done: DoneFn) => {
    service.getPhotoByIds(['123']).subscribe(() => {
      expect(myServiceSpy.show.calls.count()).toBe(1);
      expect(myServiceSpy.hide.calls.count()).toBe(1);
      done();
    });
  });

  it('should call show and hide spinner methods on getFullPhotoById', (done: DoneFn) => {
    service.getFullPhotoById('321').subscribe(() => {
      expect(myServiceSpy.show.calls.count()).toBe(1);
      expect(myServiceSpy.hide.calls.count()).toBe(1);
      done();
    });
  });

});
