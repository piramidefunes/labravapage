import { Component, inject } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modalmap',
  standalone: true,
  imports: [GoogleMapsModule,NgbModalModule],
  templateUrl: './modalmap.component.html',
  styleUrl: './modalmap.component.css'
})
export class ModalmapComponent {

  sitio='"Somos Música"';
  address = 'San martin 1372';
  localidad = 'Rosario';
  latitud = -32.95379;
  longitud = -60.6385261;
  opciones: google.maps.MapOptions = {
    mapId: 'DEMO_MAP_ID',
  };

  modalMap = inject(NgbActiveModal);

}
