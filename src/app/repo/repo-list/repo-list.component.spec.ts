import { async, fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';


import { Observable, Observer } from 'rxjs';

import { RepoListComponent } from './repo-list.component';
import { RepoListService } from './services/repo-list.service' ;

let mockReposData = {items: [
    {
      name: "freeCodeCamp",
      html_url: "https://github.com/freeCodeCamp/freeCodeCamp",
      description: "The https://www.freeCodeCamp.org open source codebase and curriculum. Learn to code for free together with millions of people.",
      pushed_at: "2019-06-11T08:00:26Z",
      open_issues_count: "372",
      owner: {
          avatar_url: "https://avatars0.githubusercontent.com/u/2918581?v=4",
      }
    },
    {
      name: "react",
      html_url: "https://github.com/facebook/react",
      description: "A declarative, efficient, and flexible JavaScript library for building user interfaces",
      pushed_at: "2019-06-10T18:37:09Z",
      open_issues_count: "706",
      owner: {
          avatar_url: "https://avatars3.githubusercontent.com/u/69631?v=4",
      }
    }
  ]
};

class MockRepoListService {
  fetch(): Observable <any> {
    return Observable.create((observer: Observer<any>) => {
      observer.next(mockReposData);
    });
  }
}

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoListComponent ],
      providers: [ { provide: RepoListService, useClass: MockRepoListService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onWindowScroll', () => {
    spyOn(component, 'onWindowScroll');
    component.onWindowScroll();
    expect(component.onWindowScroll).toHaveBeenCalled();
  });

  it('should return: [ less than one day ]', () => {

    const testingDate = new Date('2019-06-11T08:00:26Z') ;
    const mockPushedAt = new Date('2019-06-11T13:08:26Z') ;
    const expectedString = 'less than one day' ;

    jasmine.clock().install();
    jasmine.clock().mockDate( testingDate ); // go to the mock date

    expect( component.lastSubmit( mockPushedAt ) ).toEqual( expectedString );

    jasmine.clock().uninstall();
  });

  it('should return: [ 5 days ago ]', () => {

    const testingDate = new Date('2019-06-15T08:00:26Z') ;
    jasmine.clock().install();
    jasmine.clock().mockDate( testingDate ); // go to the mock date

    const mockPushedAt = new Date('2019-06-10T08:00:26Z') ;
    const expectedString = '5 days ago' ;

    expect( component.lastSubmit( mockPushedAt ) ).toEqual( expectedString );

    jasmine.clock().uninstall();
  });


});
