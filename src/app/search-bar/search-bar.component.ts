import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Level } from '../jobLevel';
import { ThemuseService } from '../themuse.service';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  providers: [ThemuseService]
})
export class SearchBarComponent implements OnInit {

  level = ['Entry Level', 'Mid Level', 'Senior Level'];

  model = new Level(this.level[0]);

  constructor() { }

  ngOnInit() { }


}
