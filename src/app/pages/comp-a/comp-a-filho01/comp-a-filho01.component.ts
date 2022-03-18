import { Component, Input, OnInit } from '@angular/core';
import { CompService } from '../../comp-service';

@Component({
  selector: 'app-comp-a-filho01',
  templateUrl: './comp-a-filho01.component.html',
  styleUrls: ['./comp-a-filho01.component.css']
})
export class CompAFilho01Component implements OnInit {

  @Input() esporro: boolean;

  constructor(
    public compService: CompService
  ) { }

  ngOnInit(): void {
  }

  abraco() {
    this.compService.comunicacaoHorizontalEvent.next(true);
  }

}
