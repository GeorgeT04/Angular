import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { LoginComponent } from './pages/login/login.component'; 
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GananciaComponent } from './pages/ganancia/ganancia.component';
import { NotificacionComponent } from './pages/notificacion/notificacion.component';
import { AnaliticaComponent } from './pages/analitica/analitica.component';
import { CardMovieComponent } from './pages/card-movie/card-movie.component'; 


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    LoginComponent,
    DashboardComponent,
    GananciaComponent,
    NotificacionComponent,
    AnaliticaComponent,
    CardMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
