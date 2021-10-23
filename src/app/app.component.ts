import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title:string  = 'Contador con angular';
  public numero:number = 0;

  /*public sumar(){
    this.numero++;
  }
  public restar(){
    this.numero--;

  }*/

  public sumarRestar(valor:number){
      this.numero=this.numero + valor;
  }
}
