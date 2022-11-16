import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call localstorage setItem method', () => {
    spyOn(window.localStorage['__proto__'], 'setItem');
    service.setData([]);
    expect(window.localStorage.setItem).toHaveBeenCalled();
  });

  it('should call localstorage getItem method', () => {
    spyOn(window.localStorage['__proto__'], 'getItem');
    service.getData();
    expect(window.localStorage.getItem).toHaveBeenCalled();
  });

});
