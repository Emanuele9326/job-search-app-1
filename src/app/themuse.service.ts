import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

import {throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ThemuseService {
  getUsers() {
    throw new Error('Method not implemented.');
  }
  city:string|undefined;
  state:string|undefined;
  configUrl:any;



constructor(
  public http: HttpClient
) { }

private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}

getSearch(level1:string| undefined){
  const configUrl=`https://www.themuse.com/api/public/jobs?category=Software%20Engineer&level=${level1}%20Level&page=2`

  return this.http.get<any>(configUrl,{observe:'body',responseType:'json'})
  .pipe(
    retry(3),
    catchError(this.handleError)
  );

}



getConfig() {


  const configUrl=`https://www.themuse.com/api/public/jobs?category=Software%20Engineer&page=2`;

  return this.http.get<any>(configUrl,{observe:'body',responseType:'json'})
  .pipe(
    retry(3),
    catchError(this.handleError)
  );

}

}




