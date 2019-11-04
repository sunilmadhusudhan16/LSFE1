
import { Marketing } from '../marketing';
import { MarketingService } from '../marketing.service';
import { MarketingDropdownService } from '../marketingdropdown.service';
import { MarketingDropdown} from '../marketingdropdown';
import { OnInit, Component, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-marketingtasklist',
  templateUrl: './marketingtasklist.component.html',
  styleUrls: ['./marketingtasklist.component.css']
})
export class MarketingTaskListComponent implements OnInit {
  private searchTerms = new Subject<string>();
  searchText;
  listComponent : MarketingTaskListComponent;
  submitted = false;
  prole: Marketing = new Marketing();

@Input() role: Marketing;
@Input() listd: MarketingDropdown;

roles: Observable<Marketing[]>;
drops: Observable<MarketingDropdown[]>
constructor(private roleService: MarketingService, private Ds: MarketingDropdownService ) {}
search(term: string): void {
  // Push a search term into the observable stream.
  this.searchTerms.next(term);
}
  ngOnInit() {

    this.reloadData();
    this.dropdata();
  }


  deleteRole(id:number) {
    this.roleService.deleteRole(id)
      .subscribe(
        data => {
          console.log(data);
         
        },
        error => console.log(error));
        this.reloadData();

        
        
  }
  reloadData() {
    this.roles = this.roleService.getRolesList();
  }

  dropdata() {
    this.drops= this.Ds.getMarketingtypes();
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