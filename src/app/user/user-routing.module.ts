import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
  
const routes: Routes = [
  { path: 'user', redirectTo: 'user/index', pathMatch: 'full'},
  { path: 'user/index', component: IndexComponent },
  { path: 'user/:userId/view', component: ViewComponent },
  { path: 'user/create', component: CreateComponent },
  { path: 'user/:userId/update', component: UpdateComponent } 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }