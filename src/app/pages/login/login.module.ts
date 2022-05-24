import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatButtonModule } from '@angular/material/button';


// export const routes = [
//   { path: '', component: LoginComponent, pathMatch: 'full' }
// ]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
  CommonModule,
  // RouterModule.forChild(routes),
  MatButtonModule,
  ],
})
export class LoginModule {
  // public static routes = routes;
}
