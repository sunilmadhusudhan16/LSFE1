import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../stockprice';
import { StockpriceService } from '../stockprice.service';
import { Stockcategory } from '../stockcategorydropdown';
import { stockcategorydropdownservice } from '../stockcategorydropdown.service';
import { Stocktype } from '../stocktypedropdown';
import { stocktypedropdownservice } from '../stocktypedropdown.service';


@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})
export class StockpriceComponent implements OnInit {

  listComponent : StockpriceComponent;
  submitted = false;
  pstock: Stock = new Stock();

@Input() stock: Stock;
@Input() stockcat: Stockcategory;
@Input() stocktypes: Stocktype;

stocks: Observable<Stock[]>;
dropcat: Observable<Stockcategory[]>;
droptype: Observable<Stocktype[]>;

  constructor(private stockService: StockpriceService,private stockcategoryservice:stockcategorydropdownservice,private stocktypeservice:stocktypedropdownservice) { }

  ngOnInit() {
    this.reloadData();
    this.dropreload();
  }

  deleteStock(id:number) {
    this.stockService.deleteStock(id)
      .subscribe(
        data => {
          console.log(data);
         
        },
        error => console.log(error));
        this.reloadData();

        
        
  }
  reloadData() {
    this.stocks = this.stockService.getStockList();
  }
  
  onSubmit() {
  this.submitted = true;
  this.save();
    
}
dropreload() {
  console.log();
  this.dropcat=this.stockcategoryservice.getAllCategory();
  this.droptype=this.stocktypeservice.getAllType();
}

editStock(stock){
  console.log(stock);
  this.pstock=stock;
  
}
save() {
  console.log(this.pstock);
  this.stockService.updateStock(this.pstock.id,this.pstock)
      .subscribe(data => console.log(data), error => console.log(error));
  
}
}
