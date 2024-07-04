import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-pagina',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  irHome(): void {
    this.router.navigate(["home"], { relativeTo: this.route });
  }
  irPregunta2(): void {
    this.router.navigate(["pregunta2"], { relativeTo: this.route });
  }
  irPregunta3(): void {
    this.router.navigate(["pregunta3"], { relativeTo: this.route });
  }
}