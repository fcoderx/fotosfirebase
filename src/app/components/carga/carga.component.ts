import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { CargaImagenService } from '../../services/carga-imagen.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: []
})
export class CargaComponent implements OnInit {

    public sobreDrop = false;
    public archivos: FileItem[] = [];

    constructor(public _cargaImg: CargaImagenService) { }

    ngOnInit() {
    }

    cargarImagenes() {
        this._cargaImg.cargarImagenesFireBase(this.archivos);
    }

    limpiarArchivos() {
        this.archivos = [];
    }

}
