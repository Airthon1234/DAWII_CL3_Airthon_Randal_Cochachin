import { Routes } from '@angular/router';
import { PaginaComponent } from './pagina/pagina.component';
import { HomeComponent } from './pagina/home/home.component';
import { HttpClient } from '@angular/common/http';
import { Pregunta3Component } from './pagina/pregunta3/pregunta3.component';
import { PaginanoencontradaComponent } from './paginanoencontrada/paginanoencontrada.component';
import { Pregunta2Component } from './pagina/pregunta2/pregunta2.component';

export const routes: Routes = [
    {
        path: "pagina", component: PaginaComponent,
        children: [
            { path: "home", component: HomeComponent },
            {path: "pregunta2",component: Pregunta2Component},
            { path: "pregunta3", component: Pregunta3Component }
        ]
    },
    {path: "paginanoencontrada",component:PaginanoencontradaComponent},
    { path: "", redirectTo: "pagina/home", pathMatch: "full" },
    { path: "**", component: PaginanoencontradaComponent }
];
