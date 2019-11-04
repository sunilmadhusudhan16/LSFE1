import { Component, OnInit } from '@angular/core';
import { Marketing } from '../marketing';

import { MarketingService } from '../marketing.service';
import { Observable, Subject } from 'rxjs';
import { MarketingDropdownService } from '../marketingdropdown.service';
import { MarketingDropdown} from '../marketingdropdown';


@Component({
  selector: 'app-addmarketingtasks',
  templateUrl: './addmarketingtasks.component.html',
  styleUrls: ['./addmarketingtasks.component.css']
})
export class AddMarketingTasksComponent implements OnInit {
 
roles: Observable<Marketing[]>;
drops: Observable<MarketingDropdown[]>;

  constructor(private roleService: MarketingService, private Ds: MarketingDropdownService ) {}
 
  role: Marketing = new Marketing();
  submitted = false;



  ngOnInit() {
    this.reloadData();
    this.dropData();
    
  }

  reloadData(){
    this.roles = this.roleService.getRolesList();
  }

dropData() {
  this.drops = this.Ds.getMarketingtypes();
}

  save() {
    this.roleService.createRole(this.role)
      .subscribe(data => console.log(data), error => console.log(error));
    this.role = new Marketing();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}



