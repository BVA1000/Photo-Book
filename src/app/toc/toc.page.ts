import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public sections = [
    {
      title: "Home / My Favorite Photos",
      url: "/home"
    },
    {
      title: "Page 1 / The Storm",
      url: "/page1"
    },
    {
      title: "Page 2 / Captiva Island",
      url: "/page2"
    },
    {
      title: "Page 3 / The West Coast",
      url: "/page3"
    },
    {
      title: "Page 4 / Riga Latvia",
      url: "/page4"
    },
    {
      title: "Page 5 / Whitefish Lake",
      url: "/page5"
    },
    {
      title: "Last Page / The End",
      url: "/lastpage"
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
