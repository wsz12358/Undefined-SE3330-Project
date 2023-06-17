package com.Repository;

import com.Entity.Curevent;
import com.Entity.Tempevent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface TempeventRepository  extends JpaRepository<Tempevent, Integer> {

    @Modifying@Transactional
    @Query(value = "delete from Tempevent where user.userId = :user")
    void deleteTempeventByUser(@Param("user") Integer user);

    @Query(value = "from Tempevent where user.userId = :user")
    Tempevent findTempeventByUser(@Param("user") Integer user);
}
