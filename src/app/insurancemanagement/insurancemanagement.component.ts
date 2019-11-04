import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurancemanagement',
  templateUrl: './insurancemanagement.component.html',
  styleUrls: ['./insurancemanagement.component.css']
})
export class InsurancemanagementComponent implements OnInit {
  submitted = false;
  user1: User = new User();
  // @Input() user2: User;
  users:Observable<User[]>;
  insurance = [];
  insurance1 = [];
  public searchText : string;

  constructor(private httpClient: HttpClient,private userService: UserService,private router : Router) { }

  ngOnInit() {
    // this.reloadData();
    // this.countryLoad();
    this.httpClient.get('http://13.233.194.50:8111/insurance/books').subscribe((res)=>{
      this.insurance.push(res);
       this.insurance1 = this.insurance[0];
      console.log(res);
  });
  }

  activeinsu(id, active)
  {
     console.log(id,active);
     if(active==1)
     {
       var useractive=0;
     }
     else{
       var useractive=1;
     }
    //  this.userjson= [{'id':id,'active':useractive}];
        // this.userjson= [{'active':useractive}];
    
      // this.name = this.user.companyname;
  
      this.httpClient.put("http://13.233.194.50:8111/service/books",
      {"id": id,
    
      "active":useractive,
      })
    .subscribe(
    data  => {
    console.log("POST Request is successful ", data);
    },
    error  => {
    
    console.log("Error", error);
    
    }
    
    );
  }
  
  //customer 
  // updateActive(isActive: boolean) {
  //   this.userService.updateUser(this.user2.id,
  //     {  active: isActive })
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.user2 = data as User;
  //       },
  //       error => console.log(error));
  // }
  
  
  reloadData()
  {
    this.users=this.userService.getUsersList();
  }
  getDetails(id){
    console.log(id);
    this.router.navigate(['/insuranceview', id]);
  
  }
  activeness(val){
    console.log(val);
    this.searchText = val;
  }
  

}
