import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { Foto } from './foto';
import { FotosService } from './fotos.service';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component {

  fotos: Foto[] = [];

  constructor(private fotosService:FotosService) { }

  ngOnInit(): void {
    this.fotosService.getFotos().subscribe(data => {
      console.log(data)
      this.fotos = data;
    });
  }

}
