import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalStorageService } from 'src/app/services/local-storage.service';

import { SinglePhotoComponent } from './single-photo.component';

describe('SinglePhotoComponent', () => {
  let component: SinglePhotoComponent;
  let fixture: ComponentFixture<SinglePhotoComponent>;

  let localStorageService: LocalStorageService

  beforeEach(() => {
    const localStorageServiceStub = {
      storage: { favorites: ['5', '7'] },
      getData: () => {
        return localStorageServiceStub.storage;
      },
      setData: (data: any) => {
        return localStorageServiceStub.storage = data;
      },
    };

    TestBed.configureTestingModule({
      declarations: [SinglePhotoComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: LocalStorageService, useValue: localStorageServiceStub }
      ]
    });

    fixture = TestBed.createComponent(SinglePhotoComponent);
    component = fixture.componentInstance;
    localStorageService = TestBed.inject(LocalStorageService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove id from favorites storage', () => {
    component.onRemove('5');
    expect(localStorageService.getData().favorites).toEqual(['7']);
  });
});
