import { UserService } from './../services/user.service';
import { Usuario } from './../models/Usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  public usuario: Usuario = {};

  constructor(private usersService: UserService) { }

  ngOnInit() {
  }

  public async salvar(){
    this.usersService.cadastrar(this.usuario).subscribe(retorno =>{
this.usuario = retorno;
    });
  }
}
