import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { UserRoutingModule } from './user-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
    
@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }