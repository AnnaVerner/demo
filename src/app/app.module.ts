import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EnglishVersionComponent } from './english-version/english-version.component';
import { GermanVersionComponent } from './german-version/german-version.component';
import { RoutingModule } from './routing/routing.module';
import { NgwWowModule } from 'ngx-wow';
import { MenuComponent } from './menu/menu.component';
import { GreetingComponent } from './greeting/greeting.component';
import { EmployeesComponent } from './employees/employees.component';
import { BusinessServicesComponent } from './business-services/business-services.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    EnglishVersionComponent,
    GermanVersionComponent,
    MenuComponent,
    GreetingComponent,
    EmployeesComponent,
    BusinessServicesComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    NgwWowModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
