import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LinkComponent } from './link/link.component';
import { CatologComponent } from './catolog/catolog.component';
import { AddcatologComponent } from './addcatolog/addcatolog.component';
import { CancellationchargesComponent } from './cancellationcharges/cancellationcharges.component';
import { AddcancelchargesComponent } from './addcancelcharges/addcancelcharges.component';
import { StockpriceComponent } from './stockprice/stockprice.component';
import { AddstockpriceComponent } from './addstockprice/addstockprice.component';
import { PanelComponent } from './panel/panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CollectioncentermanagementComponent } from './collectioncentermanagement/collectioncentermanagement.component';
import { RetailerregistrationComponent } from './retailerregistration/retailerregistration.component';
import { RetailermanagementComponent } from './retailermanagement/retailermanagement.component';
import { TransportregistrationComponent } from './transportregistration/transportregistration.component';
import { TransportmanagementComponent } from './transportmanagement/transportmanagement.component';
import { CertificationmanagementComponent } from './certificationmanagement/certificationmanagement.component';
import { InsuranceregistrationComponent } from './insuranceregistration/insuranceregistration.component';
import { InsurancemanagementComponent } from './insurancemanagement/insurancemanagement.component';
import { CollectioncenterviewComponent } from './collectioncenterview/collectioncenterview.component';
import { RetailerviewComponent } from './retailerview/retailerview.component';
import { TransportviewComponent } from './transportview/transportview.component';
import { CertificationviewComponent } from './certificationview/certificationview.component';
import { InsuranceviewComponent } from './insuranceview/insuranceview.component';
import { CertificationregistrationComponent } from './certificationregistration/certificationregistration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CcAdminComponent } from './cc-admin/cc-admin.component';
import { EmployeemanagementComponent } from './employeemanagement/employeemanagement.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { EmloyeeregComponent } from './emloyeereg/emloyeereg.component';
import { AddnewstockComponent } from './addnewstock/addnewstock.component';
import { StockInventoryComponent } from './stock-inventory/stock-inventory.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { CustomerFooterComponent } from './layout/customer-footer/customer-footer.component';
import { NormalChickenComponent } from './customer/normal-chicken/normal-chicken.component';
import { MuttonComponent } from './customer/mutton/mutton.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { OrdersComponent } from './customer/orders/orders.component';
import { CustomerCartComponent } from './customer/customer-cart/customer-cart.component';
import { MarkdashboardComponent } from './markdashboard/markdashboard.component';
import { MarkregComponent } from './markreg/markreg.component';
import { MarketingTaskListComponent } from './marketingtasklist/marketingtasklist.component';
import { AddMarketingTasksComponent } from './addmarketingtasks/addmarketingtasks.component';
import { AddbankComponent } from './addbank/addbank.component';
import { BanklistComponent } from './banklist/banklist.component';
import { AddroleComponent } from './addrole/addrole.component';
import { RolelistComponent } from './rolelist/rolelist.component';
import { VehiclelistComponent } from './vehiclelist/vehiclelist.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';


const routes: Routes =[
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: LinkComponent   },
  { path: 'Dash', component: DashboardComponent   }, 
  { path: 'pan', component: PanelComponent   }, 
  { path: 'Catolog', component: CatologComponent   },
  { path: 'addcat', component: AddcatologComponent },
  { path: 'Cancel', component: CancellationchargesComponent   },
  { path: 'addcan', component: AddcancelchargesComponent   },
  { path: 'Stprice', component: StockpriceComponent  },
  { path: 'addstp', component: AddstockpriceComponent  },
  { path: 'bkcat', component: CatologComponent  },
  { path: 'bkstk', component: StockpriceComponent  },
  { path: 'bkcan', component: CancellationchargesComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'tieups', component: PanelComponent },
  { path: 'reg', component: SignUpComponent },
  { path: 'cc', component: CollectioncentermanagementComponent },
  { path: 'retailer', component: RetailerregistrationComponent },
  { path: 'retailermanagement', component: RetailermanagementComponent },
  { path: 'transportregistration', component: TransportregistrationComponent },
  { path: 'transportmanagement', component: TransportmanagementComponent },
  { path: 'certificationregistration', component: CertificationregistrationComponent },
  { path: 'certificationmanagement', component: CertificationmanagementComponent },
  { path: 'insuranceregistration', component: InsuranceregistrationComponent },
  { path: 'insuranceremanagement', component: InsurancemanagementComponent },
  { path: 'collectioncenterview/:id',      component: CollectioncenterviewComponent },
  { path: 'retailerview/:id',      component: RetailerviewComponent },
  { path: 'transportview/:id',      component: TransportviewComponent },
  { path: 'certificationview/:id',      component: CertificationviewComponent },
  { path: 'insuranceview/:id',      component: InsuranceviewComponent },
  { path: 'Gallery', component: GalleryComponent  },
  { path: 'Contact Us', component: ContactComponent },
  { path: 'About Us', component: AboutComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'ccadmin', component:CcAdminComponent},
  { path: 'Add', component: AddnewstockComponent},
  { path: 'employee', component:EmployeemanagementComponent},
  { path: 'empreg', component:EmloyeeregComponent},
  { path: 'stock', component:StockInventoryComponent},
  {path:'customerDashboard',component:CustomerDashboardComponent},
  {path:'customerfooter', component:CustomerFooterComponent},
  {path:'normal-chicken', component:NormalChickenComponent},
  {path:'mutton', component:MuttonComponent},
  {path:'profile', component:ProfileComponent},
  {path:'Orders', component:OrdersComponent},
  {path:'customer-cart', component:CustomerCartComponent},
  { path: 'mdb', component: MarkdashboardComponent},
  { path: 'mreg', component: MarkregComponent},
  { path: 'marlist', component: MarketingTaskListComponent},
  { path: 'addmark', component: AddMarketingTasksComponent },
  { path: 'mark', component: MarkdashboardComponent },
  { path: 'bAdd', component: AddbankComponent },
  { path: 'blist', component:  BanklistComponent },
  { path: 'bAdd', component:  AddbankComponent },
  { path: 'rlist', component:  RolelistComponent },
  { path: 'rAdd', component:  AddroleComponent },
  { path: 'vlist', component:  VehiclelistComponent },
  { path: 'vAdd', component:  AddvehicleComponent },
  { path: 'bkbank', component:  BanklistComponent },
  { path: 'bkrole', component:  RolelistComponent },
  { path: 'bkvehicle', component:  VehiclelistComponent },
  
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
