package org.example.backend.Repository;

import org.example.backend.Entity.VacationReq;
import org.springframework.data.jpa.repository.JpaRepository;


public interface VacationRepository extends JpaRepository<VacationReq,Long> {

}
