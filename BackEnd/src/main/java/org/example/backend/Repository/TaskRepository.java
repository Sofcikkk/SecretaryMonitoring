package org.example.backend.Repository;

import org.example.backend.Entity.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TaskRepository extends JpaRepository<Tasks, Long> {
    Optional<Tasks> findByUserId(Long userId);

}
