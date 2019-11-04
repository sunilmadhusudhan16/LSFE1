import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalog } from '../catalog';
import { CatalogService } from '../catalog.service';
import { Stocktype } from '../stocktypedropdown';
import { stocktypedropdownservice } from '../stocktypedropdown.service';

@Component({
  selector: 'app-catolog',
  templateUrl: './catolog.component.html',
  styleUrls: ['./catolog.component.css']
})



export class CatologComponent implements OnInit {

  @Input() stocktypes: Stocktype;
  droptype: Observable<Stocktype[]>;

  constructor(private catalogservice: CatalogService,private stocktypeservice:stocktypedropdownservice) { }

  ngOnInit() {
    this.reloadData();
    this.dropreload();
  }

  listComponent : CatologComponent;
  submitted = false;
  pcatalog: Catalog = new Catalog();

@Input() catalog: Catalog;

catalogs: Observable<Catalog[]>;


  deleteCatalog(id:number) {
    this.catalogservice.deleteCatalog(id)
      .subscribe(
        data => {
          console.log(data);
         
        },
        error => console.log(error));
        this.reloadData();

        
        
  }
  reloadData() {
    this.catalogs = this.catalogservice.getCatalogList();
  }

  dropreload() {
    console.log();
    this.droptype=this.stocktypeservice.getAllType();
  }
  
  onSubmit() {
  this.submitted = true;
  this.save();
    
}

editCatalog(catalog){
  console.log(catalog);
  this.pcatalog=catalog;
  
}
save() {
  console.log(this.pcatalog);
  this.catalogservice.updateCatalog(this.pcatalog.id,this.pcatalog)
      .subscribe(data => console.log(data), error => console.log(error));
  
}

}
