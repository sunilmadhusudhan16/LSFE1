import { Component, OnInit, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { EmpReg } from '../EmpReg';
import { EmpRegServices } from '../EmpReg.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employeemanagement',
  templateUrl: './employeemanagement.component.html',
  styleUrls: ['./employeemanagement.component.css']
})
export class EmployeemanagementComponent implements OnInit {
  private searchTerms = new Subject<string>();
  submitted = false;
   pempr: EmpReg = new EmpReg();
  searchText;
  @Input() Empreg1: EmpReg;
  ereg: Observable<EmpReg[]>;
  constructor( private EmpRegs: EmpRegServices, private httpclient: HttpClient ) { }
  search(term: string): void {
      this.searchTerms.next(term);
  }
  ngOnInit() 
  {
   this.dispemp();
 
   }
  dispemp() 
  {
    this.ereg = this.EmpRegs.getAllEmployee();
  }
 
 
}









  


