import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[
  { path: 'list', loadChildren: () => import('./pages/products/list/list.module').then(m => m.ListModule) },
 { path: 'new', loadChildren: () => import('./pages/products/new/new.module').then(m => m.NewModule) },
  { path: 'details', loadChildren: () => import('./pages/products/details/details.module').then(m => m.DetailsModule) },
  { path: 'edit', loadChildren: () => import('./pages/products/edit/edit.module').then(m => m.EditModule) },
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterModule) },
  {path:'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
