package org.example.backend.Service;

import org.example.backend.Entity.Schedules;
import org.example.backend.Entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User save(User user);
    List<User> findAll();
    User updateById(Long id, User user);
    User findById(Long id);
    void deleteById(Long id);
    Optional<User> authenticateUser(String email, String password);
    List<Schedules> getUserSchedules(Long id);
}

