import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


import { RepoListService } from './services/repo-list.service' ;
import { UtilsService } from '../utils/utils.service';


@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  private repositories ;
  constructor( private repoListService: RepoListService,
               private utilsService: UtilsService ) { }

  ngOnInit() {
    this.repoListService.fetch().subscribe(res=> {
      this.repositories = res.items ;
    });
  }


  lastSubmit( pushed_at ){
    const lastSubmittedDate: any = moment( new Date( pushed_at ) ) ;
    const dateNow: any = moment( new Date() ) ;
    const last_submitted_diff_by_days = dateNow.diff(lastSubmittedDate, 'days');
    let msg: string ;

    if( last_submitted_diff_by_days > 0 )
        msg = `${last_submitted_diff_by_days} days ago` ;
    else
        msg = "less than one day" ;

    return msg  ;
  }


}