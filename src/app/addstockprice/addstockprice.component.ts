import { Component, OnInit, Input } from '@angular/core';
import { StockpriceService } from '../stockprice.service';
import { Stock } from '../stockprice';
import { Stockcategory } from '../stockcategorydropdown';
import { Stocktype } from '../stocktypedropdown';
import { Observable } from 'rxjs';
import { stockcategorydropdownservice } from '../stockcategorydropdown.service';
import { stocktypedropdownservice } from '../stocktypedropdown.service';

@Component({
  selector: 'app-addstockprice',
  templateUrl: './addstockprice.component.html',
  styleUrls: ['./addstockprice.component.css']
})
export class AddstockpriceComponent implements OnInit {

  constructor(private stockService: StockpriceService,private stockcategoryservice:stockcategorydropdownservice,private stocktypeservice:stocktypedropdownservice) { }

  stock: Stock = new Stock();
  submitted = false;
  @Input() pstockcat: Stockcategory;
@Input() pstocktypes: Stocktype;

stocks: Observable<Stock[]>;
dropcat: Observable<Stockcategory[]>;
droptype: Observable<Stocktype[]>;

  ngOnInit() {
    this.dropreload();
  }

  save() {
    this.stockService.createStock(this.stock)
      .subscribe(data => console.log(data), error => console.log(error));
    this.stock = new Stock();
  }

  dropreload() {
    console.log();
    this.dropcat=this.stockcategoryservice.getAllCategory();
    this.droptype=this.stocktypeservice.getAllType();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
