import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /**
   * Get Date Of previous month
   * 
   * @returns string date
   */
  getDateOfPreviousMonth() {
    // date before one month
    let dateBeforeMonth = new Date() ;
    dateBeforeMonth.setDate( new Date().getDate() - 30 ) ;

    let get_date = dateBeforeMonth.getDate().toString();
    let get_month = (dateBeforeMonth.getMonth() + 1).toString();
    let get_year = dateBeforeMonth.getFullYear();

    // Switch numbers under 10 to two digits
    get_date  = Number(get_date) < 10 ? '0'+get_date : get_date ;
    get_month = Number(get_month) < 10 ? '0'+get_month : get_month ;

    const formatted_date = `${get_year}-${get_month}-${get_date}` ;

    return formatted_date ;
  }

  /**
   * Abbreviate Number
   * 
   * Convert long number to an abbreviation number
   * eg. 1000 to 1k
   * 
   * @returns string date
   */
  abbreviateNumber(x) {
    if(isNaN(x)) return x;
  
    if(x < 999) {
      return x;
    }
  
    if(x < 1000000) {
      return Math.round(x/1000) + "K";
    }

    if( x < 10000000) {
      return (x/1000000).toFixed(2) + "M";
    }
  
    if(x < 1000000000) {
      return Math.round((x/1000000)) + "M";
    }
  
    if(x < 1000000000000) {
      return Math.round((x/1000000000)) + "B";
    }
  
    return "1T+";
  }
  

}
