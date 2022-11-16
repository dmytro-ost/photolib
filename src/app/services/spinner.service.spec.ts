import { TestBed } from '@angular/core/testing';

import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should set 'visible' to 'false'`, () => {
    service['visible'] = true;
    service.hide();
    expect(service['visible']).toBeFalse();
  });

  it(`should set 'visible' to 'true'`, () => {
    service['visible'] = false;
    service.show();
    expect(service['visible']).toBeTrue();
  });
});
