import { Component, OnInit, Input } from '@angular/core';
import { Cancel } from '../cancelcharges';
import { CancelchargesService } from '../cancelcharges.service';
import { CountryService } from '../country.service';
import { HttpClient } from '@angular/common/http';
import { Country } from '../country';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addcancelcharges',
  templateUrl: './addcancelcharges.component.html',
  styleUrls: ['./addcancelcharges.component.css']
})
export class AddcancelchargesComponent implements OnInit {
  cancel: Cancel = new Cancel();
  submitted = false;
  country:Country=new Country();
  clo:Observable<Country[]>;
  
  

  constructor(private cancelchargesService: CancelchargesService,private countryservice: CountryService, private httpClient: HttpClient) { }

  countries = [];
  country1 = [];
  states = [];
  state1 =[];
  selectedStates = [];
  selectedCities=[];
  cities = [];
  city1 = [];
  countryName ='';
  stateName='';

  getCountry(cData){
    console.log(cData);
     var id = cData.id;
     this.countryName = cData.name;
    
  
    this.httpClient.get('http://13.233.194.50:8111/state1/books').subscribe((res1)=>{
        this.states.push(res1);
        this.state1 = this.states[0];

        var sLength = this.state1.length;
        var i:number;
        
        for(i=0; i<sLength; i++){
            if(id == this.state1[i].country_id){
                this.selectedStates.push(this.state1[i]);
            }

        }
        console.log(this.selectedStates);

    });
    
    //debugger;
}
getState(sData)
{
var id = sData.id;
 this.stateName = sData.name;
 
  this.httpClient.get('http://13.233.194.50:8111/city1/books').subscribe((res2)=>{
      
      this.cities.push(res2);
      this.city1=this.cities[0];
      var clength =this.city1.length;
      var k:number;
      for(k=0;k<clength;k++)
      {
          if(id == this.city1[k].state_id)
          {
              this.selectedCities.push(this.city1[k]);
              console.log(this.city1[k]);
          }
      }
      console.log(this.selectedCities);
   });
}


    ngOnInit() {
      this.httpClient.get('http://13.233.194.50:8111/country1/books').subscribe((res)=>{
          this.countries.push(res);
          this.country1 = this.countries[0];
          console.log(this.country1);
      });
      
      }

      onSubmit() {
        this.submitted = true;
        
        
        this.httpClient.post("http://13.233.194.50:8111/cancelletion/charges",
    {
    "country": this.countryName,
    "state": this.stateName,
    "city": this.cancel.city,
    "minCancelCharges": this.cancel.minCancelCharges,
    "cancelChargesAfter15min": this.cancel.cancelChargesAfter15min
  
  })  
  .subscribe(
  data  => {
  console.log("POST Request is successful ", data);
  },
  error  => {
  
  console.log("Error", error);
 }
  
);
this.save();
   }
      save() {
        this.cancelchargesService.createCancel(this.cancel)
        .subscribe(data => console.log(data), error => console.log(error));
        this.cancel = new Cancel();
      }

      countryLoad()
      {
        console.log();
        this.clo=this.countryservice.getAllCountry();
      }

  
}
