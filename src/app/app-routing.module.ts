import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component'; 

//Componentes
import { LoginComponent } from './pages/login/login.component'; 

//Guards
import { AuthGuard } from './utils/auth.guard';
import { AnaliticaComponent } from './pages/analitica/analitica.component';
import { NotificacionComponent } from './pages/notificacion/notificacion.component';
import { GananciaComponent } from './pages/ganancia/ganancia.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'analitica', component: AnaliticaComponent},
  {path: 'ganancia', component: GananciaComponent},
  {path: 'notificacion', component: NotificacionComponent},
  {path: 'users', component: UsersComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
