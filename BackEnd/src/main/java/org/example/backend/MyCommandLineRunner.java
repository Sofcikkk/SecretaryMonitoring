package org.example.backend;

import org.example.backend.Entity.*;
import org.example.backend.Service.SchedulesService;
import org.example.backend.Service.UserService;
import org.example.backend.Service.VacationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Component
public class MyCommandLineRunner implements CommandLineRunner {

    @Autowired
    private UserService userService;
    @Autowired
    private SchedulesService schedulesService;
    @Autowired
    private VacationService vacationService;

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

        VacationReq vacationReq = new VacationReq();
        vacationReq.setUser(user);
        vacationReq.setStartDate(LocalDate.of(2000,11,1));
        vacationReq.setEndDate(LocalDate.of(2000,12,1));
        vacationReq.setAccepted(null);
        vacationReq.getUserFullName();
        vacationService.save(vacationReq);


    }
}
