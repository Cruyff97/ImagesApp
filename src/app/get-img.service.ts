import { environment } from './../environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { ImgInterface } from './interface/img-interface';
import { processEnv } from 'netlify/functions/processAPI/processAPI';
@Injectable({
  providedIn: 'root',
})
export class GetImgService {


  results?: ImgInterface;
  url?: string;
  constructor(private http: HttpClient) {}
  public searchImg(str: string, orient: string, color: string) {
    const API_URL= process.env.API_KEY_CT
    return this.http.get<ImgInterface>(
      `https://api.unsplash.com/search/photos?client_id=${API_URL}&orientation=${orient}&color=${color}&page=2&per_page=42&query=${str}?`
    ) .pipe(
      catchError(this.handleError)
    );
}
private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
  
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error.errors);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error(error.error.errors));
}

}
