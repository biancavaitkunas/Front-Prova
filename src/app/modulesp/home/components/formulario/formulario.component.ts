import { Component, EventEmitter, Output } from '@angular/core';
import { Veiculo } from '../../model/veiculo';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  public veiculo!: Veiculo;

  @Output() public emiteVeiculo = new EventEmitter();

  public addMarca = '';
  public addPlaca = '';
  public addAno = '';
  public addTipo = '';  

  constructor(private service: ServiceService) {}

  public salvarVeiculo(){
    this.addMarca = this.addMarca.trim();
    this.addPlaca = this.addPlaca.trim();
    this.addAno = this.addAno.trim();
    this.addTipo = this.addTipo.trim();

    //this.veiculo = {marca: this.addMarca, placa: this.addPlaca, ano: this.addAno, tipo: this.addTipo}
    this.service.submitVeiculo(this.addMarca, this.addPlaca, this.addAno, this.addTipo);
    //console.log(this.veiculo)
    
  }

}
