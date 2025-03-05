package org.example.backend.Repository;

import org.example.backend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByFirstName(String Name);//znajdowanie uzytkownika po imieniu

}
