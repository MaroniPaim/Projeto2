import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor() {}

  items: string[]=[];


  ngOnInit() {
    for (let i = 1; i < 51; i++) {
      this.items.push(`Psicologo ${i}`);
    }
  }
  showSpecialties: boolean = false;

  toggleSpecialties(): void {
    this.showSpecialties = !this.showSpecialties;
  }
}