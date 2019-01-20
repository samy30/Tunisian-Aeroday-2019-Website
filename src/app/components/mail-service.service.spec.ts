import { TestBed, inject } from '@angular/core/testing';

import { MailServiceService } from './mail-service.service';

describe('MailServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailServiceService]
    });
  });

  it('should be created', inject([MailServiceService], (service: MailServiceService) => {
    expect(service).toBeTruthy();
  }));
});
