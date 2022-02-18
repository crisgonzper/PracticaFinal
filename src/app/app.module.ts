import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms'; 
import { Routes, RouterModule} from '@angular/router'; 
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { ListadoComponent } from './listado/listado.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { RazasComponent } from './razas/razas.component';
import { UsuarioLogadoComponent } from './usuario-logado/usuario-logado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






const routes: Routes =[
  {path:'', component:ListadoComponent},
  {path:'listado', component: ListadoComponent},
  {path:'busqueda', component: BusquedaComponent},
  {path:'**', component:ListadoComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    ListadoComponent,
    BusquedaComponent,
    RazasComponent,
    UsuarioLogadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,    
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    TranslateModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
