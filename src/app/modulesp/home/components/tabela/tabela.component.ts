import { Component, Input } from '@angular/core';
import { Veiculo } from '../../model/veiculo';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {

  @Input() veiculo!: Veiculo;

  public listaVeiculos: Array<Veiculo> = [];

  public deleteVeiculo(event: number) {
    return this.listaVeiculos.splice(event, 1);
  }


}
