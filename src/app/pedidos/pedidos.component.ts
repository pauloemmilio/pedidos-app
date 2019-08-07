import { Component, OnInit } from '@angular/core';
import { PedidosService } from "../services/pedidos.service";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private pedidosService: PedidosService) { }

  pedidos = ["Hambúrguer", "Coxinha", "Café", "Cachorro quente", "Suco", "Refrigerante", "Empada", "Pastel", "Pizza", "Açaí"];
  pedidosList = [];

  addPedido = pedido => this.pedidosList.push(pedido);
  removePedido = pedido => {
    let index = this.pedidosList.indexOf(pedido);
    if (index > -1) this.pedidosList.splice(index, 1);
  };
  onSubmit() {
    this.pedidosService.form.value.pedido = this.pedidosList;
    let data = this.pedidosService.form.value;

    this.pedidosService.addPedido(data)
      .then(res => {
      });
  };

  ngOnInit() {
  }

}
