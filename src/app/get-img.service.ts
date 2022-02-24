import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImgInterface } from './interface/img-interface';

@Injectable({
  providedIn: 'root',
})
export class GetImgService {
  results?: ImgInterface;
  url?: string;
  constructor(public http: HttpClient) {}
  public searchImg(str: string, orient: string, color: string) {
    return this.http.get<ImgInterface>(
      `https://api.unsplash.com/search/photos?client_id=zu3UP0l7NAigsK4HPLI8MsSSVhaPFtdAPwxmk8jHN04&orientation=${orient}&color=${color}&page=2&per_page=42&query=${str}?`
    );
  }

  public Imgbg() {
    return this.http.get(
      `https://api.unsplash.com/photos?client_id=zu3UP0l7NAigsK4HPLI8MsSSVhaPFtdAPwxmk8jHN04&random`
    );
  }
}
