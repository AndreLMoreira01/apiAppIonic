import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
// caminho da api
  private url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

    public buscarTodos(pagina: number) {
      if(pagina <= 0){
        pagina =1;
      }

      return this.http.get(`${this.url}?page=${pagina}`);

    }
}
