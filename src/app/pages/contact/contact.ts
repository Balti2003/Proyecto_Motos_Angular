import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.pattern('^[0-9]*$')]], 
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Aca se enviarian los datos del formulario al servidor (simulacion)
      console.log("Formulario enviado con exito", this.contactForm.value);
      alert("Mensaje enviado con exito! Nos pondremos en contacto contigo pronto.");
      this.contactForm.reset();
    } else {
      console.error("El formulario no es valido");
      //muestra los mensajes de error
      this.contactForm.markAllAsTouched();
    }
  }

  get formControls() {
    return this.contactForm.controls;
  }
}
