import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RepoListService } from './repo-list.service';
import { UtilsService } from '../../../utils/utils.service';

describe('RepoListService', () => {
  beforeEach(() => { 
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RepoListService, UtilsService]
    });
  });

  it('should be created', () => {
    const service: RepoListService = TestBed.get(RepoListService);
    expect(service).toBeTruthy();
  });


  it('should return a correct data from the fetch() Observable', () => {
    const service: RepoListService = TestBed.get(RepoListService);
    service.fetch().subscribe(res => {
                                        expect(res.items).toBeDefined();
                                        expect(res.items.length).toBe(30);
                                      });
  });
});
