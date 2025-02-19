import { Component, TemplateRef, inject } from '@angular/core';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { ModalsongComponent } from '../modals/modalsong/modalsong.component';
import { ModalmapComponent } from '../modals/modalmap/modalmap.component';
import { NgbModal, NgbActiveModal, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps';



@Component({
  selector: 'app-ppal',
  standalone: true,
  imports: [ModalsongComponent,GoogleMapsModule],
  templateUrl: './ppal.component.html',
  styleUrl: './ppal.component.css',
  providers: [BsModalService],
})
export class PpalComponent {

voz = 'Lautaro González - VOZ';
bateria = 'Lucio Battagliotti - BATERÍA';
bajo = 'Pocho Detlefsen - BAJO';
guitarra = 'Matías Zaffaroni - GUITARRA';

  entradas = '... pedilas por nuestro Instagram';

  escenario = 'assets/escenarios/somosmusica.png';
  fecha = '28 de Febrero del 2025';
  direccion = 'San Martín 1372 - Rosario';

  escenario1 = 'assets/escenarios/quesearock2.png';
  fecha1 = '1 de Marzo del 2025';
  direccion1 = 'Santa Fe 1166 - Rosario';

  you1 = 'https://www.youtube.com/watch?v=TtqFtIzlxhU&list=OLAK5uy_lqMcBPznr5IVZA-gMsJe09-GM92_Dmn-c';
  you2 = 'https://www.youtube.com/watch?v=rEva-wQt51I&list=OLAK5uy_mDQ-XxTRu0T3OO5ixYUTjCbJ-SExwgbk0';
  insta = 'https://www.instagram.com/p/DCJ7uLdRQng/';

  grab1 = 'Grabación: DZ Estudio.';
  mezc1 = 'Mezcla y Mastering: Estudios Penny Lane.';
              
  grab2 = 'Grabación: (Vivo) García Bar y Rock.';
  mezc2 = 'Mezcla y Mastering: Palta Producciones.';

  lym = 'Letra y música por La Brava.';
  cyp = 'Compuesto y producido por La Brava.';

public discos =[
  {id: 1, ord: 1, disco: 'Contrato Social', titulo:'Contrato Social', dura:'3:00'},
  {id: 2, ord: 2, disco: 'Contrato Social', titulo:'Sobre Las Calles', dura:'4:42'},
  {id: 3, ord: 3, disco: 'Contrato Social', titulo:'Bajo Ese Árbol', dura:'4:45'},
  {id: 4, ord: 4, disco: 'Contrato Social', titulo:'Lejos Yo Sé', dura:'3:25'},
  {id: 5, ord: 5, disco: 'Contrato Social', titulo:'Una Vez Más', dura:'2:36'},
  {id: 6, ord: 6, disco: 'Contrato Social', titulo:'Para Vernos Hoy', dura:'5:32'},
  {id: 7, ord: 1, disco: 'Bajo la Luz de la Luna', titulo:'Una Frágil Ciudad', dura:'5:41'},
  {id: 8, ord: 2, disco: 'Bajo la Luz de la Luna', titulo:'La Disputa', dura:'5:02'},
  {id: 9, ord: 3, disco: 'Bajo la Luz de la Luna', titulo:'Ni Siquiera Yo', dura:'3:26'},
  {id: 10, ord: 4, disco: 'Bajo la Luz de la Luna', titulo:'Bang', dura:'3:28'},
  {id: 11, ord: 5, disco: 'Bajo la Luz de la Luna', titulo:'Mundo De Hoy', dura:'4:09'},
  {id: 12, ord: 6, disco: 'Bajo la Luz de la Luna', titulo:'Solo Rock', dura:'4:34'},
  {id: 13, ord: 7, disco: 'Bajo la Luz de la Luna', titulo:'Abajo Del Techito', dura:'6:04'},
];


public images =[
  {id: 1, img:'assets/imgs/lautaro.jpg', txt1:'Lauty González', txt2: ''},
  {id: 2, img:'assets/imgs/matias.jpg', txt1:'Mati Zaffaroni', txt2: ''},
  {id: 3, img:'assets/imgs/guille.jpg', txt1:'Pocho Detlefsen', txt2: ''},
  {id: 4, img:'assets/imgs/lucio.jpg', txt1:'Lucio Battagliotti', txt2: ''},

  {id: 5, img:'assets/imgs/b1.jpg', txt1:'', txt2: ''},
  {id: 6, img:'assets/imgs/b2.jpg', txt1:'', txt2: ''},
  {id: 7, img:'assets/imgs/b3.jpg', txt1:'', txt2: ''},
  {id: 8, img:'assets/imgs/b5.jpg', txt1:'', txt2: ''}

];

  ngOnInit() {}
  constructor(private modalService: BsModalService) {}

  song!: any;
  modalRef?: BsModalRef;

  openModal(verModalSong: TemplateRef<any>, songId: number) {
    if (songId) {
      this.song = this.discos.find((x) => x.id === songId);
      this.modalRef = this.modalService.show(verModalSong);
    }
  }
  
  exitModal = (): void => {
    this.modalRef?.hide();
  };


  private ngbModal = inject(NgbModal);
  verEnMapa() {
    const modalMap = this.ngbModal.open(ModalmapComponent, {
      size: 'md',
    });
  }

}
