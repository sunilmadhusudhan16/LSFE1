import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collectioncentermanagement',
  templateUrl: './collectioncentermanagement.component.html',
  styleUrls: ['./collectioncentermanagement.component.css']
})
export class CollectioncentermanagementComponent implements OnInit {

  submitted = false;
  user1: User = new User();
  @Input() user2: User;
  users:Observable<User[]>;
  public searchText : string;
  collections = [];
  collections1 = [];
  constructor(private httpClient: HttpClient,private userService: UserService, private router : Router) { }
  userjson=[];
  warehouseList1 = [
    {'id':1,'companyName': 'Deepthi groups','mobileNo':'8866004695', 'emailId':'deepthigroups@gmail.com','yearOfContract': '2' },
    {'id':2,'companyName': 'Brunda private limited','mobileNo':'9532456055', 'emailId':'brunda@gmail.com','yearOfContract': '4' },
    {'id':3,'companyName': 'Divya groups','mobileNo':'7422367891', 'emailId':'divyagroups@gmail.com','yearOfContract': '5' }
  ];

  ngOnInit() {
  //  this.reloadData();
  this.httpClient.get('http://13.233.194.50:8111/bookservice/books').subscribe((res)=>{
    this.collections.push(res);
     this.collections1 = this.collections[0];
    console.log(res);
});

}
  
activeuser(id, active)
{
   console.log(id,active);
   if(active==1)
   {
     var useractive=0;
   }
   else{
     var useractive=1;
   }
   this.userjson= [{'id':id,'active':useractive}];
      // this.userjson= [{'active':useractive}];
  
    // this.name = this.user.companyname;

    this.httpClient.put("http://13.233.194.50:8111/service/books",
    {"id": this.user1.id,
  
    "active": this.user1.active,
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

activeness(val){
  console.log(val);
  this.searchText = val;
}
reloadData()
{
  this.users=this.userService.getUsersList();
}
getDetails(id){
  console.log(id);
  this.router.navigate(['/collectioncenterview', id]);

}
}
