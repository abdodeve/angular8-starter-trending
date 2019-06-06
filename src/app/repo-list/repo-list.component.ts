import { Component, OnInit } from '@angular/core';

import { RepoListService } from './services/repo-list.service' ;

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  constructor( private repoListService: RepoListService ) { }

  ngOnInit() {
    this.repoListService.fetch().subscribe(res=> {
      console.log( res );
    });
  }

}