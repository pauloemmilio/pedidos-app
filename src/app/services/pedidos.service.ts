import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private firestore: AngularFirestore) { }
  form = new FormGroup({
    cliente: new FormControl(''),
    observacoes: new FormControl(''),
    pedido: new FormControl(''),
    pronto: new FormControl(false),
    dataCriacao: new FormControl(new Date().toLocaleString())
  });

  addPedido(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("pedidosList")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }
  listarPedidos() {
    return this.firestore.collection("pedidosList").snapshotChanges();
  }
  atualizarPedido(data) {
    return this.firestore.collection("pedidosList").doc(data.payload.doc.id).set({ pronto: true }, { merge: true });
  }
  deletarPedido(data) {
    return this.firestore.collection("pedidosList").doc(data.payload.doc.id).delete();
  }
}
