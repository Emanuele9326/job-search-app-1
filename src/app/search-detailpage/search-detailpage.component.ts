import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ThemuseService } from '../themuse.service';


@Component({
  selector: 'app-search-detailpage',
  templateUrl: './search-detailpage.component.html',
  styleUrls: ['./search-detailpage.component.css']
})
export class SearchDetailpageComponent implements OnInit {

  nameCompany: any;
  idNumber: any;
  results: Array<object> | undefined;
  id: Number | undefined;
  ind: string | undefined;
  length: number | undefined;
  contents: string | undefined;
  levels!: string;
  locations: string | undefined;
  name: string | undefined;
  company: string | undefined;
  date: string | undefined;


  constructor(
    private themuseService: ThemuseService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.route.snapshot.paramMap.get('levels')) {
      const levels = this.route.snapshot.paramMap.get('levels')!.split(" ");

      const level1 = levels[0];

      this.themuseService.getSearch(level1)
        .subscribe(data => {

          this.results = data.results;

          for (let i in this.results) {

            if (data.results[i].id === id) {
              this.ind = i;

              this.name = data.results[this.ind].name;
              this.id = data.results[this.ind].id;
              this.levels = data.results[this.ind].levels[0].name;
              this.contents = data.results[this.ind].contents;
              this.locations = data.results[this.ind].locations;
              this.date = data.results[this.ind].publication_date;
              this.nameCompany = data.results[this.ind].company.name;
              this.idNumber = data.results[this.ind].company.id;

            };


          }


        }
        )


    }

  }



}


