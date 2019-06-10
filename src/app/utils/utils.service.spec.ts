import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilsService = TestBed.get(UtilsService);
    expect(service).toBeTruthy();
  });

  it('should abbreviate the number', () => {
    const service: UtilsService = TestBed.get(UtilsService);
    const mockNumber = 4000 ;
    const expectedResult = '4K' ;
    expect( service.abbreviateNumber(mockNumber) ).toEqual( expectedResult );
  });

  it('should return date of the previous month', () => {
    const service: UtilsService = TestBed.get(UtilsService);

    const testingDate = new Date('2022-06-01') ;
    const expectedDate = '2022-05-02' ;

    jasmine.clock().install();
    jasmine.clock().mockDate( testingDate ); // go to the mock date

    expect( service.getDateOfPreviousMonth() ).toEqual( expectedDate );

    jasmine.clock().uninstall();
  });

});
