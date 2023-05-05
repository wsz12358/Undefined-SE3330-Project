package com.Repository;

import com.Entity.Curevent;
import com.Entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

public interface CureventRepository extends JpaRepository<Curevent, Integer> {

    @Modifying
    @Query(value = "delete from Curevent where CureventId >= 0")
    void deleteAllByCureventId();
}
