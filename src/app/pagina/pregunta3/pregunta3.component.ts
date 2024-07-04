import { Component, OnInit } from '@angular/core';
import { FotosService } from './fotos.service';
import { Foto } from './foto';
import { MaterialModule } from '../../angular-material/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component implements OnInit{

  fotos: Foto[] = [];
  displayedColumns: string[] = ['albumId', 'id', 'title', 'thumbnailUrl'];

  constructor(private fotosService: FotosService) { }

  ngOnInit(): void {
    this.fotosService.getFotos().subscribe({
      next: (data) => {
        this.fotos = data;
      },
    });
  }
}