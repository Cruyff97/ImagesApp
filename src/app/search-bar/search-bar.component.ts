import { GetImgService } from '../get-img.service';

import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  errorMessageServ!: string;
  errorMessageClient!: string;
  loading!: boolean;
  orientations: any = [
    { value: 'landscape', viewValue: 'landscape' },
    { value: 'portrait', viewValue: 'portrait' },
    { value: 'squarish', viewValue: 'squarish' },
  ];
  colors = [
    { value: 'black_and_white', viewValue: 'Black and White' },
    { value: 'black', viewValue: 'Black' },
    { value: 'white', viewValue: 'White' },
    { value: 'yellow', viewValue: 'Yellow' },
    { value: 'orange', viewValue: 'Orange' },
    { value: 'red', viewValue: 'Red' },
    { value: 'purple', viewValue: 'Purple' },
    { value: 'magenta', viewValue: 'Magenta' },
    { value: 'green', viewValue: 'Green' },
    { value: 'teal', viewValue: 'Teal' },
    { value: 'blue', viewValue: 'Blue' },
  ];
  public isMobile: boolean = false;
  selectedOrientation: any;
  selectedColor: any;
  search: string = '';
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
  getImg(search: string, orientation: string, colors: string): void {
    this.GetImg.searchImg(search, orientation, colors).subscribe({
      next: (x) => {
        this.result = Array.of(x.results);
        if(this.result[0].length==0){
          this.errorMessageClient= 'Nothing found, try to search something else'
        }
        
      },
      error: (x) => {
        this.errorMessageServ = x;
      },
      complete: () => {
        this.errorMessageServ = '';
      },
    });
  }
  ngOnInit() {}
}
