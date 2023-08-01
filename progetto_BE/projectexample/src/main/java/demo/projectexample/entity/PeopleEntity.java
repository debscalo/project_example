package demo.projectexample.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "people")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class PeopleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "cognome")
    private String cognome;

    @Column(name = "matricola")
    private int matricola;

    @Column(name = "citta")
    private String citta;
}
