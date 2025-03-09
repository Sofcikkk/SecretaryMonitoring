package org.example.backend.Service;

import org.example.backend.Entity.User;
import org.example.backend.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {
    User save(User user);
    List<User> findAll();
    User updateById(Long id, User user);
    User findById(Long id);
    void deleteById(Long id);

}

