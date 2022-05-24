import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './List-users/users.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CreateUserComponent } from './create-user/create-user.component';
import { MatNativeDateModule } from '@angular/material/core'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FilterModule, FilterPipe } from 'src/app/filter/filter.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [
    UsersComponent,
    CreateUserComponent,
    UpdateUserComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatNativeDateModule,
    MatDialogModule,
    MatButtonToggleModule,
    FilterModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
  ],
  exports: [
    UsersComponent,
    CreateUserComponent,
  ]
})
export class ComponentsModule { }
