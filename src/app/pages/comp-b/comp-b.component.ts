import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CompService } from '../comp-service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit, OnDestroy {

  URLAPI = 'https://reqres.in/api/users'
  getResult: any;

  constructor(
    private compService: CompService
  ) { }

  ngOnInit(): void {

  }

  getAPI() {
    this.compService.get<any>(this.URLAPI).subscribe(result => {
      this.getResult = result.data;
    });
  }

  ngOnDestroy(): void {
  }

}
