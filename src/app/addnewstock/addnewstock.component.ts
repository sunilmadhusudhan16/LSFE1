import { Component, OnInit } from '@angular/core';
import { Collection } from '../collection';
import { Observable } from 'rxjs';
import { CollectionServivce } from '../collection.service';
import { stockcategorydropdownservice } from '../stockcategorydropdown.service';
import { Stockcategory } from '../stockcategorydropdown';

@Component({
  selector: 'app-addnewstock',
  templateUrl: './addnewstock.component.html',
  styleUrls: ['./addnewstock.component.css']
})
export class AddnewstockComponent implements OnInit {
  roles: Observable<Collection[]>;
  drops: Observable<Stockcategory[]>;
  constructor(private roleService: CollectionServivce, private stockcategoryservice:stockcategorydropdownservice ) {}

  role: Collection = new Collection();
  submitted = false;
  ngOnInit() {
    this.reloadData();
    this.dropreload();
  }
  dropreload() {
    console.log();
    this.drops=this.stockcategoryservice.getAllCategory();
  }

  reloadData() {
    this.roles = this.roleService.getRolesList();
  }
  save() {
    this.roleService.createRole(this.role)
      .subscribe(data => console.log(data), error => console.log(error));
    this.role = new Collection();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}



