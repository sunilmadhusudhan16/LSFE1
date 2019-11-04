import { Component, OnInit, Input } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Catalog } from '../catalog';
import { Stocktype } from '../stocktypedropdown';
import { stocktypedropdownservice } from '../stocktypedropdown.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addcatolog',
  templateUrl: './addcatolog.component.html',
  styleUrls: ['./addcatolog.component.css']
})
export class AddcatologComponent implements OnInit {
  
  @Input() pstocktypes: Stocktype;

  constructor(private catalogservice: CatalogService,private stocktypeservice:stocktypedropdownservice) { }

  catalog: Catalog = new Catalog();
  submitted = false;
  droptype: Observable<Stocktype[]>;

  ngOnInit() {
    this.dropreload();
  }

  save() {
    this.catalogservice.createCatalog(this.catalog)
      .subscribe(data => console.log(data), error => console.log(error));
    this.catalog = new Catalog();
  }

  dropreload() {
    console.log();
    this.droptype=this.stocktypeservice.getAllType();
  }

  onSubmit() {
    this.submitted = true;
    
    this.save();
  }

}
