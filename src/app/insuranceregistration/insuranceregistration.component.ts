import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { getCurrentSanitizer } from '@angular/core/src/render3/instructions';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-insuranceregistration',
  templateUrl: './insuranceregistration.component.html',
  styleUrls: ['./insuranceregistration.component.css']
})
export class InsuranceregistrationComponent implements OnInit {
  submitted = false;
  user: User = new User();
  country:Country=new Country();
  // @Input() cl:Country;
  clo:Observable<Country[]>;


  constructor(private userService: UserService,private cs: CountryService, private httpClient: HttpClient) { }
  countries = [];
  country1 = [];
  states = [];
  state1 =[];
  selectedStates = [];
  selectedCities=[];
  cities = [];
  city1 = [];
  name ='';
  countryName ='';
  stateName='';

  genders=[
      {"value" : "M", "name" : "Male"  },
      {"value" : "F", "name" : "Female"  },
      {"value" : "O", "name" : "Others"  }
    ];

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
          debugger;
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
      // this.countryLoad();
      this.httpClient.get('http://13.233.194.50:8111/country1/books').subscribe((res)=>{
        this.countries.push(res);
        this.country1 = this.countries[0];
        console.log(this.country1);
    });
  }

   
  save() {
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

 
  onSubmit() {
    this.name = this.user.companyname;

    this.httpClient.post("http://13.233.194.50:8111/insurance/books",
    {"companyname": this.name,
    "gender": this.user.genders,
    "country": this.countryName,
    "state": this.stateName,
    "city": this.user.city,
    "mobilenum": this.user.mobilenum,
    "alternativenum": this.user.alternativenum,
    "yearofcontract": this.user.yearofcontract,
    "emailid": this.user.emailid,
    "password": this.user.password,
    "pincode": this.user.pincode,
    "licencenumber": this.user.licencenumber,
    "proprietorname": this.user.proprietorname,
    "gstnumber": this.user.gstnumber})
  .subscribe(
  data  => {
  console.log("POST Request is successful ", data);
  },
  error  => {
  
  console.log("Error", error);
  
  }
  
  );
  }

  

  countryLoad()
  {
    console.log();
    this.clo=this.cs.getAllCountry();
  }

}
