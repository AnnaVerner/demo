import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from '../app.component';
import {GermanVersionComponent} from '../german-version/german-version.component';
import {EnglishVersionComponent} from '../english-version/english-version.component';
import {ContactsComponent} from '../contacts/contacts.component';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollOffset: [0, 64]
};
const appRoutes: Routes = [
  {path: 'en', component: EnglishVersionComponent},
  {path: 'de', component: GermanVersionComponent},
  {path: '**', component: AppComponent},
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, routerOptions)],
  exports: [ RouterModule]
})
export class RoutingModule { }
