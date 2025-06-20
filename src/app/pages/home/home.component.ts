import { Component } from '@angular/core';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { ExperienciaComponent } from "../experiencia/experiencia.component";
import { CertificacionesComponent } from "../certificaciones/certificaciones.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContactoComponent,
    ExperienciaComponent,
    CertificacionesComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
