package org.example.backend.Service;

import org.example.backend.Entity.VacationReq;

import java.util.List;

public interface VacationService {
    VacationReq save(VacationReq vacationReq);
    VacationReq changeAcceptation(Long id, Boolean accept);
    VacationReq findById(Long id);
    List<VacationReq> findAll();
}
