import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ThemuseService } from './themuse.service';


describe('Service: Themuse', () => {

  let httpTestingController: HttpTestingController;
  let service: ThemuseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemuseService],
      imports:[HttpClientTestingModule]
    });
    httpTestingController=TestBed.inject(HttpTestingController);

    service = TestBed.inject(ThemuseService);
  });

  afterEach(()=>{
    httpTestingController.verify();
  });

  it('should ...', inject([ThemuseService], (service: ThemuseService) => {
    expect(service).toBeTruthy();
  }));

  it('#getConfig should return an Observable', (done)=>{
    const expectedData: object = {
      agregation:{},
      items_per_page: 20,
      page: 2,
      page_count: 2630,
      results: [],
      timed_out: false,
      took: 8,
      total: 52583,
    };

    service.getConfig().subscribe(data=>{
      expect(data).toEqual(expectedData);
      done();
    });

    //Check for correct requests: should have made one request to GET search from expected URL
    const testRequest=httpTestingController.expectOne("https://www.themuse.com/api/public/jobs?category=Software%20Engineer&page=2");
    expect(testRequest.request.method).toEqual('GET');

    //Provide each request with a mock response
    testRequest.flush(expectedData);


  });

  it('#getSearch should return an Observable', (done)=>{
    const expectedData: object = {
      agregation:{},
      items_per_page: 20,
      page: 2,
      page_count: 2630,
      results: [],
      timed_out: false,
      took: 8,
      total: 52583,
    };
    let level1="Mid";

    service.getSearch(level1).subscribe(data=>{
      expect(data).toEqual(expectedData);
      done();
    });


    //Check for correct requests: should have made one request to GET search from expected URL
    const testRequest=httpTestingController.expectOne(`https://www.themuse.com/api/public/jobs?category=Software%20Engineer&level=${level1}%20Level&page=2`);
    expect(testRequest.request.method).toEqual('GET');

    //Provide each request with a mock response
    testRequest.flush(expectedData);


  });
});
