import { Component, OnInit, Input } from '@angular/core';
import { Bank } from '../bank';
import { Observable } from 'rxjs';

import { BankService } from '../bank.service';

@Component({
  selector: 'app-banklist',
  templateUrl: './banklist.component.html',
  styleUrls: ['./banklist.component.css']
})
export class BanklistComponent implements OnInit {

  listComponent : BanklistComponent;
  submitted = false;
  pbank: Bank = new Bank();

@Input() bank: Bank;


banks: Observable<Bank[]>;

  constructor(private bankService: BankService ) { }
  ngOnInit() {
    this.reloadData();
  }

  deleteBank(id:number) {
    this.bankService.deleteBank(id)
      .subscribe(
        data => {
          console.log(data);
         
        },
        error => console.log(error));
        this.reloadData();

        
        
  }
  reloadData() {
    this.banks = this.bankService.getBanksList();
  }
  
  onSubmit() {
  this.submitted = true;
  this.save();
    
}

editbank(bank){
  console.log(bank);
  this.pbank=bank;
  
}
save() {
  console.log(this.pbank);
  this.bankService.updateBank(this.pbank.bankid,this.pbank)
      .subscribe(data => console.log(data), error => console.log(error));
  
}


}
