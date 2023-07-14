import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpInputsComponent } from './components/cp-inputs/cp-inputs.component';
import { CpListaCarrosComponent } from './components/cp-lista-carros/cp-lista-carros.component';
import { CpButtonSalvarComponent } from './components/cp-button-salvar/cp-button-salvar.component';
import { HomeComponentComponent } from './pages/home/home-component/home-component.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CpInputsComponent,
    CpListaCarrosComponent,
    CpButtonSalvarComponent,
    HomeComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
