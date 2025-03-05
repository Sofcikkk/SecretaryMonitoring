package org.example.backend.DataBaseConnection;

import jakarta.persistence.*;
import java.time.LocalDateTime;

public class Schedules {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false) // okresla nazwe kolumny ktora jest kluczem obcym w tej encji
    private User user;

    @Column(nullable = false)
    private LocalDateTime startTime;

    @Column(nullable = false)
    private  LocalDateTime endTime;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private  Status status;

    private String notes;





}
