package org.example.backend.Controller;

import org.example.backend.Entity.Tasks;
import org.example.backend.Entity.User;
import org.example.backend.Repository.TaskRepository;
import org.example.backend.Service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private TaskService taskService;

    @GetMapping
    public List<Tasks> findAll() {
        return taskService.findAll();
    }

    @PutMapping("/{id}")
    public Tasks updateById(@PathVariable Long id, @RequestBody Tasks task) {
        return taskService.updateById(id, task);
    }

    @PostMapping()
    public Tasks save(@RequestBody Tasks task) {
        return taskService.save(task);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<Tasks> getTaskByUserId(@PathVariable Long id) {
        Optional<Tasks> optionalTask = taskRepository.findByUserId(id);

        return optionalTask.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @GetMapping("/{id}")
    public Tasks findById(@PathVariable Long id) {
        return taskService.findById(id);
    }


}
