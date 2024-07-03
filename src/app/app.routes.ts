import { Routes } from '@angular/router';
import { PaginaComponent } from './pagina/pagina.component';
import { HomeComponent } from './pagina/home/home.component';
import { Pregunta2Component } from './pagina/pregunta2/pregunta2.component';
import { Pregunta3Component } from './pagina/pregunta3/pregunta3.component';
import { PaginanoencontradaComponent } from './paginanoencontrada/paginanoencontrada.component';

export const routes: Routes = [

    {path: "pagina", component:PaginaComponent,
        children: [
            {path: "home", component:HomeComponent},
            {path: "pregunta2", component:Pregunta2Component},
            {path: "pregunta3", component:Pregunta3Component}
        ]
    },
    {path: "", redirectTo: "pagina", pathMatch: "full"},
    {path: "**",component: PaginanoencontradaComponent}

];
