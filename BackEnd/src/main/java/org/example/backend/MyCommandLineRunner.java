package org.example.backend;

import org.example.backend.Entity.*;
import org.example.backend.Service.SchedulesService;
import org.example.backend.Service.TaskService;
import org.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.time.LocalTime;

@Component
public class MyCommandLineRunner implements CommandLineRunner {

    @Autowired
    private UserService userService;
    @Autowired
    private SchedulesService schedulesService;
    @Autowired
    private TaskService taskService;

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

            LocalTime startTime = LocalTime.of(9, 0); // 09:00 AM
            LocalTime endTime = LocalTime.of(10, 0); // 10:00 AM

            schedules.setStartTime(LocalTime.of(12-i,15+i));
            schedules.setEndTime(LocalTime.of(15+i,12-i));
            schedules.setDay(daysArray[i]);

            user.getSchedules().add(schedules);
        }
        userService.save(user);

        Tasks task = new Tasks();
        task.setTitle("Task 1");
        task.setDescription("Task 1");
        task.setUser(user);
        task.setCompleted(true);
        taskService.save(task);
    }
}
