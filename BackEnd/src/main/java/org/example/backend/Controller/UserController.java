package org.example.backend.Controller;

import org.example.backend.Entity.User;
import org.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping
    public User save(@RequestBody User user){return userService.save(user);}

    @GetMapping
    public List<User> findAll() {
        return userService.findAll();
    }
    @PutMapping("/{id}")
    public User update(@PathVariable Long id, @RequestBody User user) {
        return userService.updateById(id, user);
    }
    @GetMapping("/{id}")
    public User findById(@PathVariable Long id) {
        return userService.findById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id) {
        userService.deleteById(id);
    }

}
