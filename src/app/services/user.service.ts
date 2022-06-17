import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
// caminho da api
  private url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  // get
    public buscarTodos(pagina: number) {
      if(pagina <= 0){
        pagina =1;
      }

      return this.http.get(`${this.url}?page=${pagina}`);

    }

    // get por id
    public buscarId(id: number) {
      return this.http.get(`${this.url}/${id}`);
    }

    // post
    public cadastrar(usuario: Usuario){
return this.http.post(this.url, usuario);
    }

    // put ou patch
    public alterar(usuario: Usuario){
      return this.http.put(`${this.url}/${usuario.id}`, usuario);
    }
}
