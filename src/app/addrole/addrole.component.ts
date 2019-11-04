import { Component, OnInit } from '@angular/core';
import { Role } from '../role';

import { RoleService } from '../role.service';


@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent implements OnInit {

  constructor(private roleService: RoleService ) {}

  role: Role = new Role();
  submitted = false;



  ngOnInit() {
  }

  save() {
    this.roleService.createRole(this.role)
      .subscribe(data => console.log(data), error => console.log(error));
    this.role = new Role();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}



