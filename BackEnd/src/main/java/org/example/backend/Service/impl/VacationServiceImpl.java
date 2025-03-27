package org.example.backend.Service.impl;

import org.example.backend.Entity.User;
import org.example.backend.Entity.VacationReq;
import org.example.backend.Repository.UserRepository;
import org.example.backend.Repository.VacationRepository;
import org.example.backend.Service.VacationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VacationServiceImpl implements VacationService {
    private final VacationRepository vacationRepository;

    private final UserRepository userRepository;

    @Autowired
    public VacationServiceImpl(VacationRepository vacationRepository,  UserRepository userRepository) {
        this.vacationRepository = vacationRepository;
        this.userRepository = userRepository;
    }

    @Override
    public VacationReq save(VacationReq vacationReq) {
        System.out.println("Przychodzący vacationReq: " + vacationReq);
        System.out.println("Użytkownik w vacationReq: " + vacationReq.getUser());

        // Pobierz użytkownika z bazy na podstawie ID
        Long userId = vacationReq.getUser().getId();
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));

        vacationReq.setUser(user); // przypisz pełny obiekt użytkownika

        return vacationRepository.save(vacationReq);
    }
    @Override
    public VacationReq changeAcceptation(Long id, Boolean accept) {
        VacationReq vacation = this.findById(id);
        if (vacation != null) {
            vacation.setAccepted(accept);
            return this.save(vacation);
        }
        return null;
    }
    public VacationReq findById(Long id) {
        return vacationRepository.findById(id).orElse(null);
    }
    @Override
    public List<VacationReq> findAll() {
        return vacationRepository.findAll();
    }

}
