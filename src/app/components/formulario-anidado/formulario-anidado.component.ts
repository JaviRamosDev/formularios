import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.scss']
})
export class FormularioAnidadoComponent implements OnInit {
  titleAnidado:string = "Formulario Anidado"; 
  telefonoFijo:FormGroup = new FormGroup({});
  telefonoMovil:FormGroup = new FormGroup({});
  formularioAnidado:FormGroup = new FormGroup({});

  constructor(private formbuilder:FormBuilder) {
    this.telefonoFijo = this.formbuilder.group({
      prefijo:'',
      numero:''
    });
    this.telefonoMovil = this.formbuilder.group({
      prefijo:'',
      numero:''
    });
    this.formularioAnidado = this.formbuilder.group({
      telefonoFijo:this.telefonoFijo,
      telefonoMovil:this.telefonoMovil
    });
   }

  ngOnInit(): void {
  }
}
