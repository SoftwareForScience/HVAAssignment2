import { TestBed, inject } from '@angular/core/testing';

import { DarkModeHandlerService } from './dark-mode-handler.service';

describe('DarkModeHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DarkModeHandlerService]
    });
  });

  it('should be created', inject([DarkModeHandlerService], (service: DarkModeHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
