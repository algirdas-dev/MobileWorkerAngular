import { TestBed } from '@angular/core/testing';

import { TimesheetWidgetService } from './timesheet-widget.service';

describe('TimesheetWidgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimesheetWidgetService = TestBed.get(TimesheetWidgetService);
    expect(service).toBeTruthy();
  });
});
