package org.example.backend.Controller;

import org.example.backend.Entity.User;
import org.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;
    @GetMapping
    public List<User> findAll() {
        return userService.findAll();
    }
    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> request) {
        Optional<User> user = userService.authenticateUser(request.get("email"), request.get("password"));
        Map<String, Object> response = new HashMap<>();
        if (user.isPresent()) {
            response.put("message", "Login successful");
            response.put("user", user.get());
        } else {
            response.put("message", "Invalid credentials");
        }
        return response;
    }
}
