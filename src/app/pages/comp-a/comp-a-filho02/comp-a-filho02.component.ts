import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CompService } from '../../comp-service';

@Component({
  selector: 'app-comp-a-filho02',
  templateUrl: './comp-a-filho02.component.html',
  styleUrls: ['./comp-a-filho02.component.css']
})
export class CompAFilho02Component implements OnInit, OnDestroy {

  comunicacaoHorizontalSubscription: Subscription;
  abracoRecebido = false;
  @Output() salveProPaiEvent = new EventEmitter();

  constructor(
    public compService: CompService
  ) { }

  ngOnInit(): void {
    this.assinarEventos();
  }

  ngOnDestroy(): void {
    this.destruirAssinaturas();
  }

  salve() {
    this.salveProPaiEvent.emit('salve paizão!! TMJ');
  }

  private assinarEventos() {
    this.comunicacaoHorizontalSubscription = this.compService.comunicacaoHorizontalEvent.subscribe(result => {
      this.abracoRecebido = true;
    });
  }

  private destruirAssinaturas() {
    if (this.comunicacaoHorizontalSubscription)
      this.comunicacaoHorizontalSubscription.unsubscribe();
  }

}
