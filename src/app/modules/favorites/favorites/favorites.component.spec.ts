import { DebugElement, Injectable } from '@angular/core';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavigationExtras, Router } from '@angular/router';
// import { RouterStub } from 'src/app/helpers/router-stubs';
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

  let service: PhotoService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesComponent],
      providers: [
        { provide: Router, useClass: RouterStub }
      ]
    });

    service = TestBed.inject(PhotoService);

    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    el = fixture.debugElement.query(By.css('app-photos-list'));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
