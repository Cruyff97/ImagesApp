import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { ImgInterface } from './interface/img-interface';

@Injectable({
  providedIn: 'root',
})
export class GetImgService {
  results?: ImgInterface;
  url?: string;
  constructor(public http: HttpClient) {}
  public searchImg(str: String) {
    return this.http.get<ImgInterface>(
      `https://api.unsplash.com/search/photos?client_id=SET_ID&orientation=landscape&page=2&per_page=21&query=${str}?`
    );
  }

  public Imgbg(){
    return this.http.get(`https://api.unsplash.com/photos?client_id=SET_ID&random`)
  }
}
