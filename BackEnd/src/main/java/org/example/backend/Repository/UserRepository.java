package org.example.backend.Repository;

import org.example.backend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
//interface odpowiada nam za laczenie z baza danych  i daje nam gotowe metody np findAll() spring
//sam tworzy implementacje tych metod