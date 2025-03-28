package org.example.backend.Service;

import org.example.backend.Entity.Tasks;
import org.example.backend.Entity.User;
import org.springframework.scheduling.config.Task;
import org.springframework.stereotype.Service;

import java.util.List;

public interface TaskService {
    List<Tasks> findAll();
    Tasks save(Tasks tasks);
    Tasks updateById(Long id, Tasks tasks);
    Tasks findByUserId(Long id);
    Tasks findById(Long id);
    void deleteTask(Long id);

}
