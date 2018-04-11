import { TestBed, inject } from '@angular/core/testing';

import { AccounthistoryService } from './accounthistory.service';

describe('AccounthistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccounthistoryService]
    });
  });

  it('should be created', inject([AccounthistoryService], (service: AccounthistoryService) => {
    expect(service).toBeTruthy();
  }));
});
