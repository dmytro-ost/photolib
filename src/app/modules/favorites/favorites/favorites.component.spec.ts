import { DebugElement, Injectable } from '@angular/core';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavigationExtras, Router } from '@angular/router';
import { defer, of } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PhotoService } from 'src/app/services/photo.service';
import { FavoritesComponent } from './favorites.component';

@Injectable()
class RouterStub {
  navigate(commands: any[], extras?: NavigationExtras): any { }
  navigateByUrl(url: string): string { return url; }
}

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let el: DebugElement;

  let getPhotoByIdsObservableSpy: jasmine.Spy;

  beforeEach(() => {
    const localStorageServiceStub = {
      storage: { favorites: [] },
      getData: () => {
        return localStorageServiceStub.storage;
      }
    };

    let testFavoritePhotosArray = [{
      id: '123',
      url: 'www.host.com/id/123/200/300'
    }];
    const photoServiceSpyObj = jasmine.createSpyObj('PhotoService', ['getPhotoByIds']);

    getPhotoByIdsObservableSpy = photoServiceSpyObj.getPhotoByIds.and.returnValue(
      defer(() => of(testFavoritePhotosArray))
    );

    TestBed.configureTestingModule({
      declarations: [FavoritesComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: LocalStorageService, useValue: localStorageServiceStub },
        { provide: PhotoService, useValue: photoServiceSpyObj }
      ]
    });

    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;

    el = fixture.debugElement.query(By.css('app-photos-list'));
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should be empty before init', () => {
    expect(component.photos.length).toEqual(0);
  });

  it('should get favorite photos via photoService.getPhotoByIds', (done: DoneFn) => {
    fixture.detectChanges();
    getPhotoByIdsObservableSpy.calls.mostRecent().returnValue.subscribe(() => {
      fixture.detectChanges();
      expect(component.photos.length).toEqual(1);
      done();
    });
  });

  it('should tell ROUTER to navigate when photo clicked',
    inject([Router], (router: Router) => {
      const navigateByUrlSpy = spyOn(router, 'navigate');
      component.onPhotoClick('123');
      const navPath = navigateByUrlSpy.calls.first().args[0][0];
      expect(navPath).toBe('photos/123');
    })
  );
});
