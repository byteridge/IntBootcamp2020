import { TestBed } from '@angular/core/testing';

import { UsersListServiceService } from './users-list-service.service';

describe('UsersListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersListServiceService = TestBed.get(UsersListServiceService);
    expect(service).toBeTruthy();
  });
});
