import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginNgxsComponent} from './components/login-ngxs/login-ngxs.component';
import {ContactListComponent} from './components/contact-list/contact-list.component'


const routes: Routes = [
  {path: 'list', component: ContactListComponent},
  {path: 'tests/login-ngxs', component: LoginNgxsComponent},
  {path: '**', redirectTo: 'tests/login-ngxs'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
