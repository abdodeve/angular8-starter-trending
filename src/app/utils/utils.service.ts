import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /**
   * Get Date Of LastMonth
   * 
   * @returns string date
   */
  getDateOfLastMonth() {
    // date before one month
    let dateBeforeMonth = new Date() ;
    dateBeforeMonth.setDate( new Date().getDate() - 30 ) ;

    let get_date = dateBeforeMonth.getDate().toString();
    let get_month = (dateBeforeMonth.getMonth() + 1).toString();
    let get_year = dateBeforeMonth.getFullYear();

    // Switch numbers under 10 to two digits
    get_date  = Number(get_date) < 10 ? '0'+get_date : get_date ;
    get_month = Number(get_month) < 10 ? '0'+get_month : get_month ;

    const formatted_date = get_year + "-" + get_month + "-" + get_date ;

    return formatted_date ;
  }

}
