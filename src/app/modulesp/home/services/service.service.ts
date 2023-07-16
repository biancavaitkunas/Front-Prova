import { EventEmitter, Injectable } from '@angular/core';
import { Veiculo } from '../model/veiculo';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public emitEvent = new EventEmitter();
  public emitEventEditar = new EventEmitter();

  public veiculo!: Veiculo;

  public listaVeiculos: Array<Veiculo> = [
    {marca: "Fiat", placa: "ABC-123", ano: "2020", tipo: "Popular"}
  ];

  public getListaVeiculos() {
    return this.listaVeiculos;
  }

  public getVeiculoLista(event: number){
    this.veiculo = this.listaVeiculos[event]
    this.emitEventEditar.emit(this.veiculo);
  
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
