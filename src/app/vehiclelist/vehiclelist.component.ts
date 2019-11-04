import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../vehicle';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VehicleService } from '../vehicle.service';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrls: ['./vehiclelist.component.css']
})
export class VehiclelistComponent implements OnInit {
  
  listComponent : VehiclelistComponent;
  submitted = false;
  tvehicle: Vehicle = new Vehicle();

  @Input() vehicle: Vehicle;

Vehicle: Observable<Vehicle[]>;

 constructor(private vehicleService: VehicleService  ) {}
  ngOnInit() {
    this.reloadData();
  }


  deleteVehicle(id:number) {
    this.vehicleService.deleteVehicle(id)
      .subscribe(
        data => {
          console.log(data);
         
        },
        error => console.log(error));
        this.reloadData();

        
        
  }
  reloadData() {
    this.Vehicle = this.vehicleService.getVehicleList();
  }
  
  onSubmit() {
  this.submitted = true;
  this.save();
    
}

editvehicle(vehicle){
  console.log(vehicle);
  this.tvehicle=vehicle;
  
}
save() {
  console.log(this.tvehicle);
  this.vehicleService.updateVehicle(this.tvehicle.id,this.tvehicle)
      .subscribe(data => console.log(data), error => console.log(error));
  
}


  

}