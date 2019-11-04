import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CatologComponent } from './catolog/catolog.component';
import { StockpriceComponent } from './stockprice/stockprice.component';
import { CancellationchargesComponent } from './cancellationcharges/cancellationcharges.component';
import { AddcancelchargesComponent } from './addcancelcharges/addcancelcharges.component';
import { AddstockpriceComponent } from './addstockprice/addstockprice.component';
import { AddcatologComponent } from './addcatolog/addcatolog.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LinkComponent } from './link/link.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { CollectioncentermanagementComponent } from './collectioncentermanagement/collectioncentermanagement.component';
import { RetailerregistrationComponent } from './retailerregistration/retailerregistration.component';
import { RetailermanagementComponent } from './retailermanagement/retailermanagement.component';
import { TransportregistrationComponent } from './transportregistration/transportregistration.component';
import { TransportmanagementComponent } from './transportmanagement/transportmanagement.component';
import { CertificationregistrationComponent } from './certificationregistration/certificationregistration.component';
import { CertificationmanagementComponent } from './certificationmanagement/certificationmanagement.component';
import { InsuranceregistrationComponent } from './insuranceregistration/insuranceregistration.component';
import { InsurancemanagementComponent } from './insurancemanagement/insurancemanagement.component';
import { CollectioncenterviewComponent } from './collectioncenterview/collectioncenterview.component';
import { RetailerviewComponent } from './retailerview/retailerview.component';
import { TransportviewComponent } from './transportview/transportview.component';
import { CertificationviewComponent } from './certificationview/certificationview.component';
import { InsuranceviewComponent } from './insuranceview/insuranceview.component';
import { GrdFilterPipe } from './collectioncentermanagement/collection.filter.pipe';
import { PanelComponent } from './panel/panel.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { TpsidenavComponent } from './tpsidenav/tpsidenav.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { ExpertareaComponent } from './expertarea/expertarea.component';
import { ClientComponent } from './client/client.component';
import { CategoryComponent } from './category/category.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CcAdminComponent } from './cc-admin/cc-admin.component';
import { EmployeemanagementComponent } from './employeemanagement/employeemanagement.component';
import { EmloyeeregComponent } from './emloyeereg/emloyeereg.component';
import { CcsidenavComponent } from './ccsidenav/ccsidenav.component';
import { AddnewstockComponent } from './addnewstock/addnewstock.component';
import { StocklistComponent } from './stocklist/stocklist.component';
import { StockInventoryComponent } from './stock-inventory/stock-inventory.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { CustomerHeaderComponent } from './layout/customer-header/customer-header.component';
import { CustomerFooterComponent } from './layout/customer-footer/customer-footer.component';
import { NormalChickenComponent } from './customer/normal-chicken/normal-chicken.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { CustomerCartComponent } from './customer/customer-cart/customer-cart.component';
import { OrdersComponent } from './customer/orders/orders.component';
import { MuttonComponent } from './customer/mutton/mutton.component';
import { MatIconModule, MatDialogModule, MatButtonModule, MatCardModule, MatFormFieldModule,MatToolbarModule, MatMenuModule, MatBadgeModule,MatSelectModule } from '@angular/material';
import { MarkregComponent } from './markreg/markreg.component';
import { MarkdashboardComponent } from './markdashboard/markdashboard.component';
import { MarketingTaskListComponent } from './marketingtasklist/marketingtasklist.component';
import { MarketingSidenavComponent } from './marketingsidenav/marketingsidenav.component';
import { AddMarketingTasksComponent } from './addmarketingtasks/addmarketingtasks.component';
import { BanklistComponent } from './banklist/banklist.component';
import { AddbankComponent } from './addbank/addbank.component';
import { RolelistComponent } from './rolelist/rolelist.component';
import { AddroleComponent } from './addrole/addrole.component';
import { VehiclelistComponent } from './vehiclelist/vehiclelist.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';

@NgModule({
  declarations: [
    AddMarketingTasksComponent,
    MarketingSidenavComponent,
    MarketingTaskListComponent,
    MarkdashboardComponent,
    MarkregComponent,
    StockInventoryComponent,
    StocklistComponent,
    AddnewstockComponent,
    CcsidenavComponent,
    EmloyeeregComponent,
    EmployeemanagementComponent,
    CcAdminComponent,
    ExpertareaComponent,
    ClientComponent,
    CategoryComponent,
    AboutusComponent,
    BannerComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    MailboxComponent,
    AppComponent,
    FooterComponent,
    NavComponent,
    SidenavComponent,
    CatologComponent,
    StockpriceComponent,
    CancellationchargesComponent,
    AddcancelchargesComponent,
    AddstockpriceComponent,
    AddcatologComponent,
    DashboardComponent,
    LinkComponent,
    CollectioncentermanagementComponent,
    RetailerregistrationComponent,
    RetailermanagementComponent,
    TransportregistrationComponent,
    TransportmanagementComponent,
    CertificationregistrationComponent,
    CertificationmanagementComponent,
    InsuranceregistrationComponent,
    InsurancemanagementComponent,
    CollectioncenterviewComponent,
    RetailerviewComponent,
    TransportviewComponent,
    CertificationviewComponent,
    InsuranceviewComponent,
    GrdFilterPipe,
    SignUpComponent,
    PanelComponent,
    LoginComponent,
    TpsidenavComponent,
    CustomerDashboardComponent,
    CustomerHeaderComponent,
    CustomerFooterComponent,
    NormalChickenComponent,
    MuttonComponent,
    ProfileComponent,
    OrdersComponent,
    CustomerCartComponent,
    BanklistComponent,
    AddbankComponent,
    RolelistComponent,
    AddroleComponent,
    VehiclelistComponent,
    AddvehicleComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatSelectModule,
    BrowserAnimationsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
