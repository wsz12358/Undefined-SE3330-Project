package com.Repository;

import com.Entity.SharedEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SharedEventRepository  extends JpaRepository<SharedEvent, Integer> {
    @Modifying
    @Query("delete from SharedEvent where SharedeventId = :id")
    void deleteSharedEventBySharedeventId(@Param("id") Integer id);

    @Query("from SharedEvent where SharedeventId = :id")
    SharedEvent findSharedEventBySharedeventId(@Param("id") Integer id);

}
