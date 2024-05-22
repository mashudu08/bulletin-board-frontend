import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDisplayComponent } from './post/post-display/post-display.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { LoginComponent } from './auth/login/login/login.component';

const routes: Routes = [
  {path:'', component:PostDisplayComponent},
  {path:'add', component:PostCreateComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
