import { ActivatedRoute } from '@angular/router';

import { ThemuseService } from '../themuse.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
  providers: [ThemuseService]
})

export class DetailPageComponent implements OnInit {

  nameCompany!: string;
  results: Array<object> | undefined;
  id: number | undefined;
  idNumber!: string;
  ind: string | undefined;
  length: number | undefined;
  contents: string | undefined;
  levels: string | undefined;
  locations: Array<Object> | undefined;
  name: string | undefined;
  company: string | undefined;
  date: string | undefined;

  constructor(
    private themuseService: ThemuseService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {

    const Id = Number(this.route.snapshot.paramMap.get('id'));

    this.themuseService.getConfig()
      .subscribe(data => {

        this.results = data.results;

        for (let i in this.results) {

          if (data.results[i].id === Id) {
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


        };


      });




  }



}



