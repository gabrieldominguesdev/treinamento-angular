import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

  esporroDado = false;

  constructor(
    
  ) { }

  salveRecebidoResposta = false;

  ngOnInit(): void {
    
  }

  salveRecebido(mensagem: string) {
    this.salveRecebidoResposta = true;
  }

  darEsporro() {
    this.esporroDado = true;
  }

}
