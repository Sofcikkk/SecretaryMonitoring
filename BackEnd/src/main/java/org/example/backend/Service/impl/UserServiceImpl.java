package org.example.backend.Service.impl;

import org.example.backend.Entity.User;
import org.example.backend.Repository.UserRepository;
import org.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> findAll(){ return userRepository.findAll();}
    @Override
    public User save(User user){return userRepository.save(user);}
    @Override
    public User findById(Long id){return userRepository.findById(id).orElse(null);}
    @Override
    public User updateById(Long id,User user){
        User managedUser = this.findById(id);
        managedUser.setFirstName(user.getFirstName());
        managedUser.setLastName(user.getLastName());
        managedUser.setEmail(user.getEmail());
        managedUser.setPassword(user.getPassword());
        managedUser.setRole(user.getRole());
        return this.save(managedUser);
    }
    public void deleteById(Long id){
        userRepository.deleteById(id);
    }
}
