import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
  
const routes: Routes = [
  { path: 'device', redirectTo: 'device/index', pathMatch: 'full'},
  { path: 'device/index', component: IndexComponent },
  { path: 'device/:deviceId/view', component: ViewComponent },
  { path: 'device/create', component: CreateComponent },
  { path: 'device/:deviceId/update', component: UpdateComponent } 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }