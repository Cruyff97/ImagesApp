import { GetImgService } from '../get-img.service';

import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  orientations: any = [
    { value: 'landscape', viewValue: 'landscape' },
    { value: 'portrait', viewValue: 'portrait' },
    { value: 'squarish', viewValue: 'squarish' },
  ];
  colors = [
    { value: 'black_and_white', viewValue: 'black_and_white' },
    { value: 'black', viewValue: 'black' },
    { value: 'white', viewValue: 'white' },
    { value: 'yellow', viewValue: 'yellow' },
    { value: 'orange', viewValue: 'orange' },
    { value: 'red', viewValue: 'red' },
    { value: 'purple', viewValue: 'purple' },
    { value: 'magenta', viewValue: 'magenta' },
    { value: 'green', viewValue: 'green' },
    { value: 'teal', viewValue: 'teal' },
    { value: 'blue', viewValue: 'blue' },
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
  getImg(search: string, orientation: any, colors: any): void {
    this.GetImg.searchImg(search, orientation, colors).subscribe(
      (response: any) => {
        this.result = Array.of(response.results);
      }
    );
  }
  ngOnInit() {
}
}
