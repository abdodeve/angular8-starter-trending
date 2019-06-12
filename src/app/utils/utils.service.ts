import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /**
   * Get Date Of previous month
   * 
   * @returns string formatted_date
   */
  getDateOfPreviousMonth() {
    // date before one month
    let dateBeforeMonth = new Date() ;
    dateBeforeMonth.setDate( new Date().getDate() - 30 ) ; // Set dateNow to the date before 30 days

    let get_date = dateBeforeMonth.getDate().toString(); // get days
    let get_month = (dateBeforeMonth.getMonth() + 1).toString(); // get months
    let get_year = dateBeforeMonth.getFullYear(); // get years

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
   * @param x - Number to abbreviate
   * @returns string abbreviatedNumber
   */
  abbreviateNumber( nb: number ) {
    if( isNaN(nb) ) return nb;
  
    if( nb < 999 ) {
      return nb;
    }
  
    if( nb < 1000000 ) {
      return Math.round(nb/1000) + "K";
    }

    if( nb < 10000000 ) {
      return (nb/1000000).toFixed(2) + "M";
    }
  
    if( nb < 1000000000 ) {
      return Math.round((nb/1000000)) + "M";
    }
  
    if( nb < 1000000000000 ) {
      return Math.round((nb/1000000000)) + "B";
    }
  
    return "1T+";
  }
  

}
