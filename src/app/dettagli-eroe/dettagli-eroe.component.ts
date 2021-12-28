import { Component, OnInit, Input } from '@angular/core';
import {Eroe} from "../eroe";

@Component({
  selector: 'app-dettagli-eroe',
  templateUrl: './dettagli-eroe.component.html',
  styleUrls: ['./dettagli-eroe.component.css']
})
export class DettagliEroeComponent implements OnInit {

  @Input() eroeDaVisualizzare: Eroe = { /** eroeDaVisualizzare = proprietà passata dal componente parente */
    id : 0,
    nome : ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
