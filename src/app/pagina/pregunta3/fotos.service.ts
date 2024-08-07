import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Foto } from './foto';

@Injectable({
  providedIn: 'root'
})
export class FotosService{

  private url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private httpClient: HttpClient) { }

  getFotos(): Observable<Foto[]> {
    return this.httpClient.get<Foto[]>(this.url).pipe(
      map(fotos => fotos.filter(foto =>
        foto.title.startsWith('a') ||
        foto.title.startsWith('r') ||
        foto.title.startsWith('s')
      ))
    );
  }
}
