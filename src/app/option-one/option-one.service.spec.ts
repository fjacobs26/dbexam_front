import { TestBed } from '@angular/core/testing';

import { OptionOneService } from './option-one.service';

describe('OptionOneService', () => {
  let service: OptionOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
