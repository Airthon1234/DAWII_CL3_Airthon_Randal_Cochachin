import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-paginanoencontrada',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './paginanoencontrada.component.html',
  styleUrl: './paginanoencontrada.component.css'
})
export class PaginanoencontradaComponent {

  constructor(private router : Router){}

  navigateToPage(){
    this.router.navigate(['/pagina/home'])
  }

}
