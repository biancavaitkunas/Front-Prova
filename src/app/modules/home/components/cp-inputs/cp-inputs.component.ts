import { Component, EventEmitter, Output } from '@angular/core';
import { Veiculo } from '../../models/veiculo';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-cp-inputs',
  templateUrl: './cp-inputs.component.html',
  styleUrls: ['./cp-inputs.component.scss'],
})
export class CpInputsComponent {

  @Output() public emiteVeiculo = new EventEmitter();

  public addVeiculo: Array<Veiculo> = [
  ]

  constructor(private service: ServiceService) {}

  public addMarca = '';
  public addPlaca = '';
  public addAno = '';
  public addTipo = '';
  public fonte: string = '';

  public submitVeiculo() {
    this.addMarca = this.addMarca.trim();
    this.addPlaca = this.addPlaca.trim();
    this.addAno = this.addAno.trim();
    this.addTipo = this.addTipo.trim();

    if (this.addMarca && this.addPlaca && this.addAno && this.addTipo) {
      this.service.submitVeiculo(this.addMarca, this.addPlaca, this.addAno, this.addTipo);
      this.addMarca = '';
      this.addPlaca = '';
      this.addAno = '';
      this.addTipo = '';
    }
  }

  public recebeVeiculo(marca: string, placa: string, ano: string, tipo: string){
    this.addMarca = marca;
    this.addPlaca = placa;
    this.addAno = ano;
    this.addTipo = tipo;
  }

}
