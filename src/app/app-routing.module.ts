import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjercicioUnoComponent } from './ejercicio-uno/ejercicio-uno.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'ejercicio-uno'
  },
  {
    path:"ejercicio-uno",
    component: EjercicioUnoComponent, 
  },
  { 
    path: 'ejercicio-dos', 
    loadChildren: () => import('./ejercicio-dos/ejercicio-dos.module').then(m => m.EjercicioDosModule) 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
