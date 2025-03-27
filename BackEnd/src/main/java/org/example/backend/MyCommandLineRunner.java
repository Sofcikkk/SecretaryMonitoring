package org.example.backend;

import org.example.backend.Entity.Days;
import org.example.backend.Entity.Role;
import org.example.backend.Entity.Schedules;
import org.example.backend.Entity.User;
import org.example.backend.Service.SchedulesService;
import org.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Component
public class MyCommandLineRunner implements CommandLineRunner {

    @Autowired
    private UserService userService;
    @Autowired
    private SchedulesService schedulesService;

    @Override
    public void run(String... args) throws Exception {
        Days[] daysArray = Days.values();

        User user = new User();
        user.setFirstName("szymonpizda");
        user.setLastName("dulewski");
        user.setEmail("szymon@gmail.com");
        user.setPassword("password");
        user.setRole(Role.director);

        for (int i = 0; i < 5; i++) {
            Schedules schedules = new Schedules();
            schedules.setUser(user);

            // przykładowe sloty pracy: 9:50 - 11:30
            schedules.setStartTime(LocalTime.of(9, 50));
            schedules.setEndTime(LocalTime.of(11, 30));
            schedules.setDay(daysArray[i]); // MONDAY - FRIDAY

            user.getSchedules().add(schedules);
        }

        userService.save(user);
    }
}
