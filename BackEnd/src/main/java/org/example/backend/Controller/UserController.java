package org.example.backend.Controller;

import org.example.backend.Entity.Schedules;
import org.example.backend.Entity.User;
import org.example.backend.Entity.VacationReq;
import org.example.backend.Service.UserService;
import org.example.backend.Service.VacationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private VacationService vacationService;

    @Autowired
    private VacationService vacationRepository;

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

    @GetMapping("/{id}/schedules")
    public List<Schedules> getUserSchedules(@PathVariable Long id) {
        return userService.getUserSchedules(id);
    }



    @GetMapping("/{id}/vacation")
    public List<VacationReq> getUserVacation(@PathVariable Long id) {
        return userService.getUserVacationReqs(id);
    }
    @PutMapping("/{id}/vacation")
    public VacationReq changeVacationStatus(
            @PathVariable Long id,
            @RequestBody Boolean accept
    ) {
        return vacationService.changeAcceptation(id, accept);
    }
    @PostMapping("/vacation")
    public VacationReq save(@RequestBody VacationReq vacationReq) {return vacationService.save(vacationReq);}
    @GetMapping("/vacation/all")
    public List<VacationReq> getAllVacationRequests() {
        return vacationRepository.findAll();
    }

}
