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

scrollToContacto() {
  const contactoElement = document.getElementById('contacto');
  if (contactoElement) {
    contactoElement.scrollIntoView({ behavior: 'smooth' });
  }
}
descargarCV() {
  const link = document.createElement('a');
  link.href = 'assets/CV/CarlosPalladinoCv.pdf';
  link.download = 'CarlosPalladinoCv.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


}
