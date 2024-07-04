import { Component, OnInit } from '@angular/core';
import { Episodio } from './episodios';
import { EpisodioService } from './episodio.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../angular-material/material/material.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component implements OnInit{

  episodios: Episodio[] = [];
  Columns: string [] = ['id','name','air_date','episode','url','created']

  constructor(private episodioService:EpisodioService){
  }

  ngOnInit(): void {
    this.episodioService.listarEpisodios().subscribe(data => {
      console.log(data)
      this.episodios = data;
    });
  }
}