import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent, ListComponent } from './components/index';

const routes: Routes = [
  {
    // Rota dinamica /:
    path: 'user/:id', component: UserComponent, //:id dinamico
  },
  {path: 'list', component: ListComponent},
  {path:'user/new', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
