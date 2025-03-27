package org.example.backend.Service.impl;

import org.example.backend.Entity.VacationReq;
import org.example.backend.Repository.VacationRepository;
import org.example.backend.Service.VacationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VacationServiceImpl implements VacationService {
    private final VacationRepository vacationRepository;

    @Autowired
    public VacationServiceImpl(VacationRepository vacationRepository) {
        this.vacationRepository = vacationRepository;
    }

    @Override
    public VacationReq save(VacationReq vacationReq) {
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
    @Override
    public VacationReq findById(Long id) {
        return vacationRepository.findById(id).orElse(null);
    }
}
