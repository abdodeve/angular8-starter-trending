import { Component, HostListener, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import * as moment from 'moment';

import { UtilsService } from '../../utils/utils.service' ; // Used in [repo-list.component.html]
import { RepoListService } from './services/repo-list.service' ;
import { Repo } from '../repo';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit, AfterViewInit {

  @ViewChild('octoCatSpinner',  {static: false}) octoCatSpinner: ElementRef;
  repositories: Array<Repo> = new Array<Repo>() ;
  page: number = 0 ;
  isOnload: boolean = false ;

  constructor( private repoListService: RepoListService,
               private utilsService: UtilsService ) { }

  ngOnInit() {
    this.isOnload = true ;
    // Fetch repos form server
    this.repoListService.fetch( this.page ).subscribe(res=> {
      this.repositories = [ ...this.repositories, ...res.items ] ;
      this.isOnload = false ;
    });

  
  }

  ngAfterViewInit() {
  }

    /**
     * Fetch Repos
     * 
     * @returns void
     */
    @HostListener("window:scroll", ["$event"])
    onWindowScroll() {

        let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight; // Get current position
        let max = document.documentElement.scrollHeight - 1 ; // Get document height

        // If the user don't reach the end yet or data is Onload then return
        if( pos <= max || this.isOnload ) {
          console.log('pos < max', {pos, max}, this.isOnload);
          return ;
        }

          this.isOnload = true ;
          this.page++ ;

          this.octoCatSpinner.nativeElement.style.display = "block" ; // Show spinner
          // Fetch repos form server
          this.repoListService.fetch( this.page ).subscribe(res=> {
            this.isOnload = false ;
            this.octoCatSpinner.nativeElement.style.display = "none" ;  // Hide spinner
            this.repositories = [ ...this.repositories, ...res.items ] ;
          });
    }

    
    /**
     * Last submit
     * Show the time of the last submit
     * This methode used in ( repo-list.component.html )
     * 
     * @returns String
     */
      lastSubmit( pushed_at ){
        const lastSubmittedDate: any = moment( new Date( pushed_at ) ) ; // Convert pushed_at to date 
        const dateNow: any = moment( new Date() ) ;
        const last_submit_by_days: number = dateNow.diff( lastSubmittedDate, 'days' );

        if( isNaN( last_submit_by_days ) )
          return "" ;

        if( last_submit_by_days < 1 )
          return "less than one day" ;

        return `${last_submit_by_days} days ago` ;
      }


}