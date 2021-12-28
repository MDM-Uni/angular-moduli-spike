import { Component, OnInit } from '@angular/core';
import {Eroe} from "../eroe";
import {fintiEroi} from "../finti-eroi";

@Component({
  selector: 'app-eroi',
  templateUrl: './eroi.component.html',
  styleUrls: ['./eroi.component.css']
})
export class EroiComponent implements OnInit {

  eroi: Eroe[] = fintiEroi;

  eroeSelezionato : Eroe = {
    id : 0,
    nome : ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(eroe : Eroe) : void {
    this.eroeSelezionato = eroe;
  }
}
