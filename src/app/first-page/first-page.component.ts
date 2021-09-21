import { Component, OnInit } from '@angular/core';
import { ThemuseService } from '../themuse.service';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
  providers: [ThemuseService]
})
export class FirstPageComponent implements OnInit {

  results: Array<any> | undefined;



  constructor(public themuseservice: ThemuseService) { }

  ngOnInit() {

    this.themuseservice.getConfig()
      .subscribe(data => {
        this.results = data.results;

      });

  }

}
