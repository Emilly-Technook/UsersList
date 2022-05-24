import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PasswordRecoverComponent } from './password-recover.component';



@NgModule({
  declarations: [PasswordRecoverComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class PasswordRecoverModule { }
