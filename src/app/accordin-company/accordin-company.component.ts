import { Component, OnInit, Input } from '@angular/core';
import { ThemuseService } from '../themuse.service';

@Component({
  selector: 'app-accordin-company',
  templateUrl: './accordin-company.component.html',
  styleUrls: ['./accordin-company.component.css'],
  providers: [ThemuseService]
})
export class AccordinCompanyComponent implements OnInit {

  @Input() company = "";
  @Input() id = "";
  panelOpenState = false;


  constructor() { }

  ngOnInit() { }

}
