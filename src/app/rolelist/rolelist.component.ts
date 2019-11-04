import { Component, OnInit, Input } from '@angular/core';
import { Role } from '../role';
import { Observable } from 'rxjs';

import { RoleService } from '../role.service';

@Component({
  selector: 'app-rolelist',
  templateUrl: './rolelist.component.html',
  styleUrls: ['./rolelist.component.css']
})
export class RolelistComponent implements OnInit {
  
  listComponent : RolelistComponent;
  submitted = false;
  prole: Role = new Role();

@Input() role: Role;

roles: Observable<Role[]>;

constructor(private roleService: RoleService  ) {}
  ngOnInit() {
    this.reloadData();
  }


  deleteRole(id:number) {
    this.roleService.deleteRole(id)
      .subscribe(
        data => {
          console.log(data);
         
        },
        error => console.log(error));
        this.reloadData();

        
        
  }
  reloadData() {
    this.roles = this.roleService.getRolesList();
  }
  
  onSubmit() {
  this.submitted = true;
  this.save();
    
}

editrole(role){
  console.log(role);
  this.prole=role;
  
}
save() {
  console.log(this.prole);
  this.roleService.updateRole(this.prole.roleid,this.prole)
      .subscribe(data => console.log(data), error => console.log(error));
  
}


  

}