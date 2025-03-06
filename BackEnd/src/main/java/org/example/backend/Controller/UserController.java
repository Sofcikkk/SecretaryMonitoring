package org.example.backend.Controller;

import jakarta.persistence.Id;
import org.example.backend.Entity.User;
import org.example.backend.Service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserController {
    private final UserService userService; // pole userService ktore przechowyuje referencje obiektu klasy UserService (jeszcze nie zawiera obiektu)
    //nie przechowuje w sobie metod tylko adres w pamieci przez co UserController moze korzystac z metod napisanych w UserService
    public UserController(UserService userService) {
        this.userService = userService;
        //referencja  pozwala na korzystanie z metod i pol obiektu
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        System.out.println("asdqwe");
        return userService.getAllUsers();

    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);

    }
}
