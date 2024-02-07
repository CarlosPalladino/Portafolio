import { Component } from '@angular/core';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { ContactoComponent } from '../contacto/contacto.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProyectosComponent,
    ContactoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
