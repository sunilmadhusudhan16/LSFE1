import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpReg } from '../EmpReg';
import { EmpRegServices } from '../EmpReg.service';


@Component({
  selector: 'app-emloyeereg',
  templateUrl: './emloyeereg.component.html',
  styleUrls: ['./emloyeereg.component.css']
})
export class EmloyeeregComponent implements OnInit {
  submitted = false;
  er: EmpReg = new EmpReg();
 
    constructor(private ers:EmpRegServices, private httpClient: HttpClient)  { }
    countries = [];
    country1 = [];
   states = [];
 state1 =[];
 selectedStates = [];
 selectedCities=[];
 cities = [];
 city1 = [];
 countryn ='';
 staten='';
    genders=[
      {"value" : "M", "name" : "Male"  },
      {"value" : "F", "name" : "Female"  },
      {"value" : "O", "name" : "Others"  }
    ];
    
    getCountry(cData){
      console.log(cData);
       var id = cData.id;
       this.countryn = cData.name;
   
   
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
   this.staten = sData.name;
   
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
            this.countries.push(res);
            this.country1 = this.countries[0];
            console.log(this.country1);
        });
   
        }

  
  onSubmit() {
    this.submitted = true;

   this.httpClient.post('http://13.233.194.50:8111/empreg/ereg',
    {"firstname": this.er.firstname,
    "lastname": this.er.lastname,
    "gender": this.er.gender,
    "country": this.countryn,
    "state": this.staten,
    "city": this.er.city,
    "mobile": this.er.mobile,
     "dob": this.er.dob,   
    "yoc": this.er.yoc,
    "email": this.er.email,
    "password": this.er.password,
    "employeetype": this.er.employeetype,
    "address": this.er.address,
   })
   
    .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      },
      error  => 
      {
      console.log("Error", error);
      }
      
     );
     
     this.save();  

 
}
save()
{
  this.ers.createEmp(this.er)
  .subscribe(data => console.log(data),error =>console.log(error));
  this.er=new EmpReg();
}

}