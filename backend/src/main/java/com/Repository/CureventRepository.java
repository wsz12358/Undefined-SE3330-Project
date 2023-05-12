package com.Repository;

import com.Entity.Curevent;
import com.Entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface CureventRepository extends JpaRepository<Curevent, Integer> {

    @Modifying
    @Query(value = "delete from Curevent where user.userId = :user ")
    void deleteCureventsByUser(@Param("user") Integer user);

    @Query(value = "from Curevent where user.userId = :user")
    List<Curevent> findCureventsByUser(@Param("user") Integer user);
}
