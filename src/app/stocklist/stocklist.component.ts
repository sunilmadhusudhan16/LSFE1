import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '../collection';
import { Observable, Subject, of } from 'rxjs';

import { CollectionServivce } from '../collection.service';
import { stockcategorydropdownservice } from '../stockcategorydropdown.service';
import { Stockcategory } from '../stockcategorydropdown';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})

export class StocklistComponent implements OnInit {
  private searchTerms = new Subject<string>();
  listComponent : StocklistComponent;
  submitted = false;
  prole: Collection = new Collection();
  searchText;

@Input() role: Collection;
@Input() dlistl: Stockcategory;
roles: Observable<Collection[]>;

drops: Observable<Stockcategory[]>;
dbsearch: Observable<Collection[]>;

constructor(private roleService: CollectionServivce, private stockcategoryservice:stockcategorydropdownservice,private httpclient: HttpClient) {}
search(term: string): void {
  // Push a search term into the observable stream.
  this.searchTerms.next(term);
}


  ngOnInit()
   {    
    this.reloadData();
    this.dropreload();
    
  }
  deleteRole(id:number) {
    this.roleService.deleteRole(id)
    
      .subscribe(
        data => {
          console.log(data) 
          this.reloadData();
         
        },
        error => console.log(error));
           
        
  }
  reloadData() {
    this.roles = this.roleService.getRolesList();
  }
  
  dropreload() {
    console.log();
    this.drops=this.stockcategoryservice.getAllCategory();
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
  this.roleService.updateRole(this.prole.id,this.prole)
      .subscribe(data => console.log(data), error => console.log(error));
  
}
}