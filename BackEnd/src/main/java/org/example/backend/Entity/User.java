package org.example.backend.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {
    //tworzenie wzorca Bazy Danych w kodzie
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //wartosc pola generowana automatycznie
    private Long id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Enumerated(EnumType.STRING) // hibernate zapisuje wartosc enum jako warosc string
    @Column(nullable = false)
    private Role role;

    //hibernate mapuje obiekty z javy do relacji w bazie danych

}
