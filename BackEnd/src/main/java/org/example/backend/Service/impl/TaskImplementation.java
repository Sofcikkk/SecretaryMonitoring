package org.example.backend.Service.impl;

import org.example.backend.Entity.Tasks;
import org.example.backend.Entity.User;
import org.example.backend.Repository.TaskRepository;
import org.example.backend.Service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.scheduling.config.Task;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;
import java.util.Optional;

@Service
public class TaskImplementation implements TaskService {
    private final TaskRepository taskRepository;
    private final TaskService taskService;

    @Autowired
    public TaskImplementation(TaskRepository taskRepository, TaskService taskService) {
        this.taskRepository = taskRepository;
        this.taskService = taskService;
    }

    @Override
    public  List<Tasks> findAll() {
        return taskRepository.findAll();
    }

    @Override
    public Tasks save(Tasks tasks) {
        return taskRepository.save(tasks);
    }

    @Override
    public Tasks updateById(Long id, Tasks updatedData) {
        Tasks existingTask = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found with id: " + id));

        existingTask.setTitle(updatedData.getTitle());
        existingTask.setDescription(updatedData.getDescription());
        existingTask.setCompleted(updatedData.isCompleted());

        return taskRepository.save(existingTask);
    }

    @Override
    public Tasks findByUserId(Long userId) {
        Optional<Tasks> optionalTask = taskRepository.findByUserId(userId);

        if (optionalTask.isPresent()) {
            return optionalTask.get();
        } else {
            throw new RuntimeException("Nie znaleziono zadania dla użytkownika o id: " + userId);
        }
    }
    @Override
    public Tasks findById(Long id) {
        Optional<Tasks> optionalTask = taskRepository.findById(id);
        if (optionalTask.isPresent()) {
            return optionalTask.get();
        } else {
            throw new RuntimeException("Nie znaleziono zadania dla użytkownika o id: " + id);
        }
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }
}
