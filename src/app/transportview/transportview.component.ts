import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transportview',
  templateUrl: './transportview.component.html',
  styleUrls: ['./transportview.component.css']
})
export class TransportviewComponent implements OnInit {
  transporters = [];
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
     // this.countryLoad();
     this.httpClient.get('http://13.233.194.50:8111/transport/books/'+id).subscribe((res)=>{
        // this..push(res);
        // this.country1 = this.countries[0];
        console.log(JSON.stringify(res));
        this.transporters.push(res);
        console.log(this.transporters);
    });
  }

}
