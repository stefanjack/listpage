import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListpageComponent } from './listpage.component';
import { EditRowComponent } from './edit-row.component';

import { CanDeactivateGuard } from './can-deactivate-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: ListpageComponent },
  { path: 'edit/:id', component: EditRowComponent, canDeactivate: [CanDeactivateGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ CanDeactivateGuard ]
})
export class AppRoutingModule {}
