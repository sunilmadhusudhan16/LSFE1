import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-certificationview',
  templateUrl: './certificationview.component.html',
  styleUrls: ['./certificationview.component.css']
})
export class CertificationviewComponent implements OnInit {
  certifications = [];

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
     // this.countryLoad();
     this.httpClient.get('http://13.233.194.50:8111/certification/books/'+id).subscribe((res)=>{
        // this..push(res);
        // this.country1 = this.countries[0];
        console.log(JSON.stringify(res));
        this.certifications.push(res);
        console.log(this.certifications);
    });
  }

}
