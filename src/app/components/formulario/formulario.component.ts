import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  title:string = 'Formularios';
  formulario:FormGroup = new FormGroup({});

  constructor(private formbuilder:FormBuilder) {
    this.formulario = this.formbuilder.group({
      nombre:'',
      apellidos:'',
      email:'',
      telefono:'',
      direccion:''
    }); 
   }

  ngOnInit(): void {
    this.formulario.valueChanges.subscribe(
      (changes) => console.log(changes)
    )
  }
}
