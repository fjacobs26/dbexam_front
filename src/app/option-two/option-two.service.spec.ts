import { TestBed } from '@angular/core/testing';

import { OptionTwoService } from './option-two.service';

describe('OptionTwoService', () => {
  let service: OptionTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
