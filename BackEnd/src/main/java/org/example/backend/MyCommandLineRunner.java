package org.example.backend;

import org.example.backend.Entity.Role;
import org.example.backend.Entity.User;
import org.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MyCommandLineRunner implements CommandLineRunner {

    @Autowired
    private UserService userService;

    @Override
    public void run(String... args) throws Exception {
        User user = new User();
        user.setFirstName("szymonpizda");
        user.setLastName("dulewski");
        user.setEmail("szymon@gmail.com");
        user.setPassword("password");
        user.setRole(Role.director);
        userService.save(user);
    }
}
