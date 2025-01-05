import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modalsong',
  standalone: true,
  imports: [],
  templateUrl: './modalsong.component.html',
  styleUrl: './modalsong.component.css'
})
export class ModalsongComponent {

  @Input() tema: any;
  
  @Input() exitModal = (): void => {
  };

  song: any = null;
  title: any = null;
  cancion: any = null;
  audio: any = null;

  ngOnInit() {
    
    const orden = this.tema.id;
    this.title = this.tema.titulo;
    this.cancion = "assets/audios/"+(this.title)+".mp3";

switch (orden) {
    case 1:
      this.song = this.song1;
      break;
    case 2:
      this.song = this.song2;
      break;
    case 3: 
      this.song = this.song3;
      break;
    case 4: 
      this.song = this.song4;
      break;
    case 5: 
      this.song = this.song5;
      break;
    case 6: 
      this.song = this.song6;
      break;
    case 7: 
      this.song = this.song7;
      break;
    case 8: 
      this.song = this.song8;
      break;
    case 9: 
      this.song = this.song9;
      break;
    case 10: 
      this.song = this.song10;
      break;
    case 11: 
      this.song = this.song11;
      break;
    case 12: 
      this.song = this.song12;
      break;
    case 13: 
      this.song = this.song13;
      break;

    default:
      this.song='Falta incluirla';
}
}


reproducir() {
  this.audio = new Audio(this.cancion);
  this.audio.play();
}
pausar() {
  this.audio.pause();
}

/* canciones ojo en chivilcoy*/
/* contrato social */
song1 = [
  'Contrato social, para la desigualdad',
  'el rico se mantiene en pie',
  'y el pobre a laburar',
  '.',
  'Pasan los días, pasan los meses',
  'los años y todo sigue igual',
  'el que llega al gobierno',
  'roba hasta que se va',
  '.',
  'El pueblo no gobierna',
  'El periodismo habla',
  'El rico se mantiene en pie',
  'y el pobre a laburar',
  '.',
  'Pasan los candidatos,',
  'los meses, los años y todo sigue igual',
  'La gente sin darse cuenta',
  'Ayuda hipócritas a gobernar',
  '.',
  'Contrato social, para la desigualdad',
  'el rico se mantiene en pie',
  'y el pobre a laburar'
];

/* sobre las calles */
song2 = [
  'Golpeaste puerta por puerta',
  'A la puesta del sol',
  '¿Por qué será que nadie te contesta?',
  '.',
  'Quizá sea necesaria',
  'Una prendida para descansar',
  'Porque ya sabemos',
  'Que tu cruz te atormenta',
  '.',
  'Aunque sea alguien',
  'Deje una reja entreabierta',
  'Te olvidaste de llevarte',
  'Puesta una mirada',
  '.',
  'Sin lucidez, sin querer',
  'Dijiste perdón',
  'Te rescatas en el silencio',
  'Que dejó su corazón',
  '.',
  'Bocanada de aire',
  'Sentiste al pasar',
  'Sentiste a la vida',
  'Al verla sonrojar',
  '.',
  'Se prendió, fuego el sol',
  'Al verte bailar',
  'Se olvidó, de sentir dolor',
  'Al escucharte hablar',
  '.',
  'Las palabras nunca son suficientes',
  '.',
  'Quiero verte bailar',
  'Aunque me lleve',
  'Quiero sentir tu piel',
  'En el averno',
  '.',
  'Las palabras nunca son suficientes',
  'Pero quiero escuchar tu voz',
  '.',
  'Algún día será por vos',
  'Pero sin, esta miseria'
];

/* bajo ese arbol */
song3 =[
'Bajo ese árbol',
'Tirado en la sombra',
'Yo vi pasar',
'Una verde hoja',
'.',
'Mirando el cielo',
'Contemplando la vida',
'Fumándome un faso',
'De pronto la vi',
'.',
'Una rama apuntó',
'A un hermoso río',
'Para curar',
'Todas mis heridas',
'.',
'Y allá voy',
'Buscando sanar',
'Lo que me hizo',
'Esa flor me hizo tan mal',
'.',
'Me sentí mareado',
'No supe que hacer',
'Perdido en la noche',
'De pronto volé',
'De pronto volé',
'.',
'Y ahora dime cómo',
'Me saco está espina',
'De esa flor',
'Que me hizo tan mal',
'.',
'Alucinando',
'Mirando el cielo',
'Fumándome un faso',
'Contemplando la vida',
'.',
'Me sentí mareado',
'No supe que hacer',
'Perdido en la noche',
'De pronto volé',
'De pronto volé',
'.',
'Me sentí mareado',
'No supe que hacer',
'Perdido en la noche',
'De pronto volé',
'De pronto volé',
'De pronto volé',
];

/* lejos yo sé */
song4 = [
'Lejos yo sé que',
'La distancia no importa',
'Solo importa donde estás.',
'A vos mismo te encontrás',
'Si estás en libertad',
'.',
'Lejos yo sé que',
'Sin importar cuanto falte',
'Tengo el mundo por delante',
'.',
'El sol se asoma despacio',
'Sobre la montaña',
'Guiando a tu corazón',
'Que quiere saber donde está',
'.',
'Lejos se ve donde',
'Se esconden las estrellas',
'Lejos estoy cuando no veo donde voy',
'.',
'El sol se asoma despacio',
'Sobre la montaña',
'Guiando a tu corazón',
'Que quiere saber donde está'
];

/* Adonde vas */
song5 = [
'Adonde vas',
'te preguntás',
'y porqué',
'siempre es lo mismo.',
'.',
'Aquel lugar',
'está frío y oscuro',
'como es que',
'me contaste.',
'.',
'Sereno te fuiste otra vez',
'otra noche sin descansar',
'rondando por esas calles',
'una vez más',
'.',
'Hoy te vas',
'sin mirar atrás',
'y sin ver',
'que dejaste',
'.',
'Si me busco',
'me encuentro',
'en cada rincón',
'de vos',
'.',
'Sereno te fuiste otra vez',
'otra noche sin descansar',
'rondando por esas calles',
'una vez más'
];

/* para vernos hoy */
song6 = [
'El mundo cae a tus pies',
'Sintiendo tus pasos',
'Tu dolor se rinde,',
'Viendo tu felicidad',
'.',
'Tu sonrisa es el motor',
'Que le da sentido a todo',
'Todo tiene sentido',
'.',
'La vida gira a tu alrededor',
'Los días pasan volando',
'.',
'Hay poco tiempo para vernos hoy',
'Hay poco tiempo para vernos hoy',
'Hay poco tiempo...',
'Hay poco tiempo para vernos hoy.',
'.',
'En soledad no se alcanza la verdad',
'Esa que esconde tu mirada',
'La flor que vuela a tu ventana',
'Te la mando desde el corazón',
'.',
'Tu sonrisa es el motor',
'Que le da sentido a todo',
'Todo tiene sentido',
'Cuando sonreís',
'.',
'La vida gira a tu alrededor',
'Los días pasan volando',
'.',
'Hay poco tiempo para vernos hoy',
'Hay poco tiempo para vernos hoy',
'Hay poco tiempo...',
'Hay poco tiempo para vernos hoy.',
'.',
'Hay poco tiempo para vernos hoy',
'Hay poco tiempo para vernos hoy',
'Hay poco tiempo...',
'Hay poco tiempo para vernos hoy.'
];

/* Bajo la luz de la luna*/
/* una frágil ciudad */
song7 = [
'Voy con la brújula descompuesta',
'Perdido en esta gran ciudad',
'El río y la luna de mí corazón',
'Están cuando no sé por dónde voy',
'.',
'Una frágil ciudad',
'Y un río opaco para vos',
'Envuelto en llanto',
'Es mí río al que le canto esta canción',
'.',
'Hundidos en la soledad',
'De la ciudad',
'Abrigados con el frío de la noche',
'Cuando asoma el ocaso en silencio',
'Unos vienen y otros van',
'.',
'(pero yo me quedo acá...)',
'.',
'Una frágil ciudad',
'Y un río opaco para vos',
'Envuelto en llanto',
'Es mí río al que le canto',
'Esta canción',
'.',
'Cuando la luz de la luna',
'En la oscuridad',
'Ilumine la ciudad',
'.',
'Una frágil ciudad' ,
'Y un río opaco para vos',
'Envuelto en llanto',
'Es mí río al que le canto esta canción'
];

song8 = [
'Tirando de la cuerda',
'Siempre para mí lado' ,
'Siendo una sombra',
'Entre estas viñetas',
'.',
'Un lienzo en blanco',
'Para mí obra maestra',
'Que se va a lucir',
'Desprendiendo egoísmo', 
'.',
'Porque a gordo conocedor',
'No sé le niega el paladar',
'Amamantar el hecho',
'De que ya no estés acá',
'.',
'La papa está que arde',
'Y se la están pasando',
'Va de mano en mano',
'Y para todos parte hay',
'.',
'Aun creo que ameritaba',
'Salir de ahí', 
'Por el bien de todos,',
'Si eso debe ser así', 
'.',
'Nuestro rock te hace pensar',
'Te estás ahogando en tu propia saliva',
'Nosotros estamos acá',
'Tirando para no aflojar',
'.',
'Porque a gordo conocedor', 
'No se le niega el paladar',
'Nosotros estamos acá',
'Tirando para no aflojar',
'.',
'Nuestro rock te hace pensar',
'Te estás ahogando en tu propia saliva',
'Amamantando el hecho',
'De que ya no estés acá'
];

song9 = [
'Sopla un viento en mí quietud',
'Que se deshoja al ver tu luz',
'Donde muere un corazón',
'Tan colgado de amor, de amor... de amor...',
'.',
'Me sacude el dolor',
'Y yo muriendo sin piedad',
'En el perfume de tu voz', 
'Tan alejado de mí',
'Que me asuste de perderte a vos',
'Y ni siquiera encontrarme yo', 
'Ni siquiera yo',
'Ni siquiera a vos',
'.',
'Ay que roto y mal parado', 
'Quedé pagando por necio ',
'Y vos ahí parada sola',
'Esperando que mí mano',
'Un día te alcance amor',
'.',
'Ay que roto y mal parado', 
'Quedé pagando por necio', 
'Dejé mí alma de lado',
'Esperando que tu mano',
'Un día me alcance amor'
];

song10 = [
'No había ventanas cerca de ese paredón', 
'Solo su luz me distrajo un segundo',
'Entra y sale de su mundo de ilusión',
' Caminando medio torcido',
'.',
'Con sus frágiles caras',
'Cómo zombies sin tumba van',
'No quieren asomar la cabeza',
'Por miedo al dolor, ¡BANG!',
'.', 
'Trasnochados viendo la luz ahí dentro', 
'Sienten la áspera oscuridad', 
'El cuchillo que se queda sin filo',
'Los corto a todos por igual',
'.',
'Con sus frágiles caras',
'Cómo zombies sin tumba van',
'No quieren asomar la cabeza',
'Por miedo al dolor, ¡BANG! ¡BANG!'
];

song11 = [
'Ay pobre guachito', 
'Se dio cuenta tarde que',
'Lo querían correr',
'De todo ese mal papel', 
'.',
'Su sangre juega en las calles', 
'No conoce la vida de hotel',
'No contempla modales',
'Él es como lo ves',
'.',
'Ay pobre guachin', 
'Nadie te dijo',
'Que no es por ahí',
'Anda a buscarlo rezando a tu dios',
'Que lo traiga de vuelta',
'Al mundo de hoy',
'.',
'Ay pobre guachin',
'Un día de estos',
'Estaré por ahí',
'Anda a buscarlo rezando a tu dios',
'Que lo traiga de vuelta',
'Al mundo de hoy',
'.',
'En este azar al que llamamos vida',
'En donde nadie se atreve a jugar',
'Somos la pieza que falta',
'No elegimos donde estar'
];

song12 = [
'Esas calaveras',
'No conocen el sol',
'Van bailando en la noche',
'Entre el humo y el alcohol',
'Van contando las estrellas',
'Mientras hacen el amor',
'.',
'Tan solitario está tu cuerpo',
'Tan solo me siento yo',
'Si vos te llevaste mí alma',
'Te robaste mí canción', 
'.',
'Yo me quede',
'Con la guitarra en la mano.',
'Ella se fue',
'Con un pedazo de mí corazón',
'Yo me quedé',
'Pensando y pensando',
'Ella se fue',
'A mí solo me queda el rock', 
'Y así estoy mejor', 
'.',
'Nena si te querías ir',
'Me hubieras avisado',
'Ahora estoy acá plantado', 
'Con el humo y el alcohol', 
'.',
'Yo me quede',
'Con la guitarra en la mano.',
'Ella se fue',
'Con un pedazo de mí corazón', 
'Yo me quedé',
'Pensando y pensando', 
'Ella se fue',
'A mí solo me queda el rock', 
'Y así estoy mejor'
];

song13 = [
'Estaba ahí, esperando',
'A que me lleve a dónde voy', 
'Abajo de un techito', 
'O en el rayo del sol', 
'.',
'Sé que voy a preguntar',
'Sé que vas a estar ahí para mí', 
'Y no me vas a olvidar', 
'Aunque pase mucho tiempo', 
'.',
'Ya me voy, ya me voy', 
'Ya me voy, por ahí', 
'Ya me voy, ya me voy', 
'Abajo de un techito,', 
'Esperando por vos',
'.',
'Me mata la incertidumbre',
'De lo que yo hago bien o mal', 
'Si será este mí lugar', 
'O si será más allá', 
'.',
'Sé que voy a preguntar',
'Sé que vas a estar ahí para mí' ,
'Y no me vas a olvidar',
'Aunque pase mucho tiempo', 
'.',
'Ya me voy, ya me voy', 
'Ya me voy, me voy por ahí', 
'Ya me voy, ya me voy', 
'Abajo de un techito', 
'Esperando por vos',
'.',
'Ya me voy, ya me voy', 
'Ya me voy, me voy por ahí', 
'Ya me voy, ya me voy', 
'Abajo de un techito', 
'Esperando por vos'
];



}
