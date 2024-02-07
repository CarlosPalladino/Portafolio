import { Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { HomeComponent } from './pages/home/home.component';
export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,

    },
    {
        path: "contacto",
        component: ContactoComponent
    },
    {
        path: "proyectos",
        component: ProyectosComponent
    }



];
