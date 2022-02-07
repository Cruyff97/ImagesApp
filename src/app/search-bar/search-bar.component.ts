import { GetImgService } from './../get-img.service';

import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  public isMobile: boolean = false;
  search: String = '';
  result?: any;
  bg?: string;
  constructor(
    private GetImg: GetImgService,
    breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isMobile = result.matches;
    });
  }
  getImg(search: String): void {
    this.GetImg.searchImg(search).subscribe((response: any) => {
      this.result = Array.of(response.results);

      console.log(this.result[0].length)      
    });
  }
  ngOnInit(): void {
    this.GetImg.Imgbg().subscribe((response:any)=>{
      this.bg= response[Math.floor(Math.random()*12)].urls.regular;
      console.log(this.bg);
    })
  }
}
