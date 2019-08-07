import { Component, OnInit } from '@angular/core';
import { PedidosService } from "../services/pedidos.service";

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {

  constructor(private pedidosService:PedidosService) { }

  ngOnInit() {
    this.listarPedidos();
  }

  pedidosList;

  listarPedidos = () => this.pedidosService.listarPedidos().subscribe(res =>(this.pedidosList = res));

  atualizarPedido = data => this.pedidosService.atualizarPedido(data);

  deletarPedido = data => this.pedidosService.deletarPedido(data);
}
