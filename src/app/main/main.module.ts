import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { CreateComponent } from './create/create.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    CreateComponent
  ]
})
export class MainModule { }
