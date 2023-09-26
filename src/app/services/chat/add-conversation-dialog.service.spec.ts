import { TestBed } from '@angular/core/testing';

import { AddConversationDialogService } from './add-conversation-dialog.service';

describe('AddConversationDialogService', () => {
  let service: AddConversationDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddConversationDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
