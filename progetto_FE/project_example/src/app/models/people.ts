export class People {
  id: number;
  img: Blob;
  nome: string;
  cognome: string;
  matricola: number;
  citta: string;

  constructor(id: number, img:Blob, nome: string, cognome: string, matricola: number, citta: string) {
    this.id = id;
    this.img = img;
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.citta = citta;
  }

  
}
