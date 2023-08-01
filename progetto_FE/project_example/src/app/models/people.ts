export class People {
  id: number;
  nome: string;
  cognome: string;
  matricola: number;
  citta: string;

  constructor(id: number, nome: string, cognome: string, matricola: number, citta: string) {
    this.id = id;
    this.nome = nome;
    this.cognome = cognome;
    this.matricola = matricola;
    this.citta = citta;
  }
}
