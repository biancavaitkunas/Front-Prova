import { bindNodeCallback } from 'rxjs';
import { Veiculo } from '../../models/veiculo';
import { ServiceService } from '../../services/service.service';
import { Component, DoCheck, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cp-lista-carros',
  templateUrl: './cp-lista-carros.component.html',
  styleUrls: ['./cp-lista-carros.component.scss'],
})
export class CpListaCarrosComponent implements DoCheck {

  @Output() public emitEventEditar = new EventEmitter();

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public listaVeiculos: Array<Veiculo> = JSON.parse(
    localStorage.getItem('veiculos') || '[]'
  );
  fonte: string = '';

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.listaVeiculos = this.service.getListaVeiculos();
  }

  public deleteVeiculo(event: number) {
    return this.listaVeiculos.splice(event, 1);
  }

  public editarVeiculo(event: number) {
    const veiculo = this.service.getVeiculoLista(event);
    this.emitEventEditar.emit(veiculo)

  }

  public setEmitVeiculo(
    marca: string,
    placa: string,
    ano: string,
    tipo: string
  ) {
    this.listaVeiculos.push({
      marca: marca,
      placa: placa,
      ano: ano,
      tipo: tipo,
    });
  }

  public setLocalStorage() {
    localStorage.setItem('veiculos', JSON.stringify(this.listaVeiculos));
  }
}
