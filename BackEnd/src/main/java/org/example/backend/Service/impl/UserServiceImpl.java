package org.example.backend.Service.impl;

import org.example.backend.Entity.User;
import org.example.backend.Repository.UserRepository;
import org.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword())); // Ensure password is hashed
        return userRepository.save(user);
    }

    @Override
    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User updateById(Long id, User user) {
        User managedUser = this.findById(id);
        if (managedUser != null) {
            managedUser.setFirstName(user.getFirstName());
            managedUser.setLastName(user.getLastName());
            managedUser.setEmail(user.getEmail());
            managedUser.setPassword(passwordEncoder.encode(user.getPassword())); // Hash updated password
            managedUser.setRole(user.getRole());
            return this.save(managedUser);
        }
        return null;
    }

    @Override
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

    public Optional<User> authenticateUser(String email, String password) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent() && passwordEncoder.matches(password, userOptional.get().getPassword())) {
            return userOptional;
        }
        return Optional.empty();
    }
}
