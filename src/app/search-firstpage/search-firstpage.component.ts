import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ThemuseService } from '../themuse.service';

@Component({
  selector: 'app-search-firstpage',
  templateUrl: './search-firstpage.component.html',
  styleUrls: ['./search-firstpage.component.css'],
  providers: [ThemuseService]
})
export class SearchFirstpageComponent implements OnInit {

  results: Array<any> | undefined;
  param1: Number | null | undefined;
  param2!: Array<string>;
  level1: string | undefined;


  constructor(
    public themuseservice: ThemuseService,
    public router: Router,
    public route: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.param1 = Number(this.route.snapshot.paramMap.get('id'));
        if (this.route.snapshot.paramMap.get('levels')) {

          this.param2 = this.route.snapshot.paramMap.get('levels')!.split(" ");

          this.level1 = this.param2?.[0];

          this.themuseservice.getSearch(this.level1)
            .subscribe(data => {

              this.results = data.results;

            }
            )
        };

      })

  }

}
