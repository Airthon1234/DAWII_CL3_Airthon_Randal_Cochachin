import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episodio } from './episodios';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodioService {

  private url = 'https://rickandmortyapi.com/api/episode';

  constructor(private httpClient:HttpClient) { }

  listarEpisodios(): Observable<Episodio[]>{

    return this.httpClient.get<{info:any, results:Episodio[]}>(this.url)
    .pipe(map(response => response.results.filter(episodio => episodio.id%2 !== 0)));
  }
}
