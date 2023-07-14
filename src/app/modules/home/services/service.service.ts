import { Veiculo } from '../models/veiculo';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public emitEvent = new EventEmitter();
  public emitEventEditar = new EventEmitter();

  public listaVeiculos: Array<Veiculo> = [
    {marca: "Fiat", placa: "ABC-123", ano: "2020", tipo: "Popular"}
  ];

  public getListaVeiculos() {
    return this.listaVeiculos;
  }

  public getVeiculoLista(event: number){
    return this.listaVeiculos.at(event);
  }

  public submitVeiculo(marca: string, placa: string, ano: string, tipo: string){
    this.listaVeiculos.push({marca: marca, placa: placa, ano: ano, tipo: tipo})
    this.emitEvent.emit(this.listaVeiculos.toString)
    return this.listaVeiculos;
  }

  public editarVeiculo(veiculo: Veiculo){
    this.emitEventEditar.emit(veiculo)
    return veiculo;
  }

  constructor() { }
}
