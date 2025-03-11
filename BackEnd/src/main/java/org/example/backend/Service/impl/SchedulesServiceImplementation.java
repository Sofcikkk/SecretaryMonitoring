package org.example.backend.Service.impl;

import org.example.backend.Entity.Schedules;
import org.example.backend.Repository.SchedulesRepository;
import org.example.backend.Service.SchedulesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SchedulesServiceImplementation implements SchedulesService {

    private final SchedulesRepository schedulesRepository;

    @Autowired
    public SchedulesServiceImplementation(SchedulesRepository schedulesRepository) {
        this.schedulesRepository = schedulesRepository;
    };

    @Override
    public Schedules save(Schedules schedules){
        return schedulesRepository.save(schedules);
    }
}
