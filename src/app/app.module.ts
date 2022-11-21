import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavegadorComponent } from './navegador/navegador.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { PuestosComponent } from './moduloSeguridad/puestos/puestos.component';
import { UsuarioComponent } from './moduloSeguridad/usuario/usuario.component';
import { ActividadComponent } from './moduloUtilitarios/actividad/actividad.component';
import { EstatusComponent } from './moduloUtilitarios/estatus/estatus.component';
import { TractComponent } from './moduloUtilitarios/tract/tract.component';
import { TipoLibroComponent } from './moduloUtilitarios/tipo-libro/tipo-libro.component';
import { IngresarComponent } from './moduloExtractado/ingresar/ingresar.component';
import { ActualizaComponent } from './moduloExtractado/actualiza/actualiza.component';
import { DashboardextractComponent } from './dashboardExtract/dashboardextract.component';
import { BitacoraComponent } from './moduloExtractado/bitacora/bitacora.component';


const appRoutes: Routes=[
  {path:'', component: LoginComponent },
  {path:'login', component: LoginComponent },
  {path:'navegador', component: NavegadorComponent},
  {path:'dashboardextract', component: DashboardextractComponent},
  {path:'bitacora', component: BitacoraComponent},
  {path:'actualiza', component: ActualizaComponent},
  {path:'ingresar', component: IngresarComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardMainComponent,
    NavegadorComponent,
    UsuariosComponent,
    AjustesComponent,
    PuestosComponent,
    UsuarioComponent,
    ActividadComponent,
    EstatusComponent,
    TractComponent,
    TipoLibroComponent,
    IngresarComponent,
    ActualizaComponent,
    DashboardextractComponent,
    BitacoraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
