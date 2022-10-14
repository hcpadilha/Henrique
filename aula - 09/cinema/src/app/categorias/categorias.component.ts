import { Component, OnInit } from '@angular/core';
import { Categoria } from './categoria/categoria.model';

@Component({
  selector: 'cin-categorias',
  templateUrl: './categorias.component.html',

})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[] = [
    
    {id: 1, titulo: 'acao', imagemPath: '../../assets/img/acai1.jpeg'},
    {id: 2, titulo: 'aventura', imagemPath: '../../assets/img/aventura1.jpg'},
    {id: 3, titulo: 'comedia', imagemPath: '../../assets/img/come1.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
