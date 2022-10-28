import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.scss']
})
export class FormularioValidadoComponent implements OnInit {
  titleValidado:string = 'Formulario Validado';
  formularioValidado:FormGroup = new FormGroup({}); 

  constructor(private formbuilder:FormBuilder) { 
    this.formularioValidado = this.formbuilder.group({
      nombre:['', Validators.required],
      apellidos:'',
      edad:['', Validators.compose([Validators.required, Validators.min(18), Validators.max(99)])],
      email:['', Validators.compose([Validators.required, Validators.email])],
      password:['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z ]*")])], 
      acepta:[false, Validators.requiredTrue]
    })
  }

  public getNombre()  {
    return this.formularioValidado.get('nombre');
  }

  public getApellidos()  {
    return this.formularioValidado.get('apellidos');
  }

  public getEdad()  {
    return this.formularioValidado.get('edad');
  }

  public getEmail()  {
    return this.formularioValidado.get('email');
  }

  public getPassword()  {
    return this.formularioValidado.get('password');
  }

  public getAcepta()  {
    return this.formularioValidado.get('acepta');
  }

  public enviarFormulario() {
    if(this.formularioValidado.valid) {
      console.table(this.formularioValidado.value);
      this.formularioValidado.reset();
    }
  }

  ngOnInit(): void { 
    
  }
}
