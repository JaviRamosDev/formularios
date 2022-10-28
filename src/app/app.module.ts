import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';

//modulos de angular material
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormularioAnidadoComponent } from './components/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/formulario-validado/formulario-validado.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
