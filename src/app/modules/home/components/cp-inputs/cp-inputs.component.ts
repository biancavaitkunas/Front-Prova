import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Veiculo } from '../../models/veiculo';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-cp-inputs',
  templateUrl: './cp-inputs.component.html',
  styleUrls: ['./cp-inputs.component.scss'],
})
export class CpInputsComponent implements OnInit {

  public veiculo: any = {}

  @Output() public emiteVeiculo = new EventEmitter();

  constructor(private service: ServiceService) { }

  public submitVeiculo(marca: string, placa: string, ano: string, tipo: string) {
    marca = marca.trim();
    placa = placa.trim();
    ano = ano.trim();

    if(marca && placa && ano && tipo){
      this.service.submitVeiculo(marca, placa, ano, tipo);
      this.limpaVeiculo();
    }   

  }

  public limpaVeiculo() {
    this.veiculo = {};
  }

  ngOnInit(): void {
    this.service.emitEventEditar.subscribe((carro: Veiculo) => { this.veiculo = carro });

  }
}
