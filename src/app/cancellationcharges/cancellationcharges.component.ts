import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Cancel } from '../cancelcharges';
import { CancelchargesService } from '../cancelcharges.service';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cancellationcharges',
  templateUrl: './cancellationcharges.component.html',
  styleUrls: ['./cancellationcharges.component.css']
})
export class CancellationchargesComponent implements OnInit {

  listComponent : CancellationchargesComponent;
  submitted = false;
  pcancel: Cancel = new Cancel();
  pcountry:Country=new Country();
  @Input() cl:Country;
  clos:Observable<Country[]>;

  @Input() cancel: Cancel;

cancels: Observable<Cancel[]>;

  constructor(private cancelchargesService: CancelchargesService,private countryservice: CountryService,private httpClient: HttpClient) { }

  countries = [];
  country1 = [];
  states = [];
  state =[];
  selectedStates = [];
  selectedCities=[];
  cities = [];
  city = [];
  countryName ='';
  stateName='';
  cityname='';

  getCountry(cData){
    console.log(cData);
     var id = cData.id;
     this.countryName = cData.name;
        this.httpClient.get('http://13.233.194.50:8111/state1/books').subscribe((res1)=>{
            this.states.push(res1);
            this.state = this.states[0];

            var sLength = this.state.length;
            var i:number;
            
            for(i=0; i<sLength; i++){
                if(id == this.state[i].country_id){
                    this.selectedStates.push(this.state[i]);
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
          this.city=this.cities[0];
          var clength =this.city.length;
          var k:number;
          for(k=0;k<clength;k++)
          {
              if(id == this.city[k].state_id)
              {
                  this.selectedCities.push(this.city[k]);
                  console.log(this.city[k]);
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
       this.reloadData();
  }
  deleteCancel(id:number) {
    this.cancelchargesService.deleteCancel(id)
      .subscribe(
        data => {
          console.log(data);
         
        },
        error => console.log(error));
        this.reloadData();

        
        
  }
  reloadData() {
    this.cancels = this.cancelchargesService.getCancelList();
  }
  
  onSubmit() {
  this.submitted = true;

 
  this.save();
    
}

editCancel(cancel){
  console.log(cancel);
  this.pcancel=cancel;
  
}
save() {
  console.log(this.pcancel);
  this.cancelchargesService.updateCancel(this.pcancel.id,{
    country: this.countryName,
    state: this.stateName,
    city: this.pcancel.city,
    minCancelCharges: this.pcancel.minCancelCharges,
    cancelChargesAfter15min: this.pcancel.cancelChargesAfter15min})
.subscribe(data => console.log(data), error => console.log(error));
  
}
countryLoad()
      {
        console.log();
        this.clos=this.countryservice.getAllCountry();
      }
}
