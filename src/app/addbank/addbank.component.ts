import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank';

import { BankService } from '../bank.service';

@Component({
  selector: 'app-addbank',
  templateUrl: './addbank.component.html',
  styleUrls: ['./addbank.component.css']
})
export class AddbankComponent implements OnInit {

  constructor(private bankService: BankService) { }
  bank: Bank = new Bank();
  submitted = false;
  ngOnInit() {
  }

  save() {
    this.bankService.createBank(this.bank)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bank = new Bank();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
