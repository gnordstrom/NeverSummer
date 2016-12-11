// Angular Imports
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Module Imports
import { CompanyModule } from './company/company.module';
import { LongboardsModule } from './longboards/longboards.module';
import { SnowboardsModule } from './snowboards/snowboards.module';
import { StoreModule } from './store/store.module';
// Service Imports
import { HttpService } from './store/http.service';
// Main Components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CompanyModule,
    LongboardsModule,
    SnowboardsModule,
    StoreModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
