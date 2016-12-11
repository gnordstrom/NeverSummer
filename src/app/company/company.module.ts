// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { routing } from './../app.routing';
// Store Components
import { CompanyComponent } from './company.component';
import { CompanyCalendarComponent } from './company-calendar/company-calendar.component';
import { CompanyContactComponent } from './company-contact/company-contact.component';
import { CompanyDealersComponent } from './company-dealers/company-dealers.component';
import { CompanyInternationalDealersComponent } from './company-international-dealers/company-international-dealers.component';
import { CompanyMotoComponent } from './company-moto/company-moto.component';
import { CompanyNewsComponent } from './company-news/company-news.component';
import { CompanyWarrantyComponent } from './company-warranty/company-warranty.component';

@NgModule({
    declarations: [
        CompanyComponent,
        CompanyCalendarComponent,
        CompanyContactComponent,
        CompanyDealersComponent,
        CompanyInternationalDealersComponent,
        CompanyMotoComponent,
        CompanyNewsComponent,
        CompanyWarrantyComponent
    ],
    imports: [CommonModule, routing]
})

export class CompanyModule {}