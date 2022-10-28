import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent implements OnInit {
  titleArray:string = 'Formulario Array';
  formularioArray:FormGroup = new FormGroup({});

  constructor(private formbuilder:FormBuilder) { 
    this.formularioArray = this.formbuilder.group({
      nombre:'',
      apellidos:'',
      telefonos:this.formbuilder.array([])
    })
  }

  public getTelefonos():FormArray {
    return this.formularioArray.get('telefonos') as FormArray
  }

  public agregarTelefono():void  {
    const telefonoNuevo:FormGroup = this.formbuilder.group({
      prefijo:'',
      numero:''
    })

    this.getTelefonos().push(telefonoNuevo);
  }

  public eliminarTelefono(index:number):void  {
    this.getTelefonos().removeAt(index);
  }

  ngOnInit(): void {
  }

}
