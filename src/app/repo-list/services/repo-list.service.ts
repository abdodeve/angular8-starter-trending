
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UtilsService } from '../../utils/utils.service';

import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RepoListService {

  constructor( private http: HttpClient,
               private utilsService: UtilsService ) { }


  /**
   * Get Repos
   * 
   * @returns array repos
   */
  fetch(): Observable <any> {

    const url             = `${environment.api}/search/repositories?q=created:>${this.utilsService.getDateOfLastMonth()}&sort=stars&order=desc` ;
    const httpOptions = {
                          headers: new HttpHeaders({
                            'Accept'        : 'application/json',
                            'Content-Type'  : 'application/json',
                          })
                        };
    return this.http.get<any>(url, httpOptions) ;
  }



}