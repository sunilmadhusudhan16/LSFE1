import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';

import { VehicleService } from '../vehicle.service';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit {

  vehicle: Observable<Vehicle[]>;


  constructor(private vehicleService: VehicleService ) {}

  Vehicle: Vehicle = new Vehicle();
  submitted = false;



  ngOnInit() {
    
  }
  
  save() {
    this.vehicleService.createVehicle(this.vehicle)
      .subscribe(data => console.log(data), error => console.log(error));
    this.Vehicle = new Vehicle();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}



