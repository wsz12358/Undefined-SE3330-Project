package com.Repository;

import com.Entity.Event;
import com.Entity.Message;
import com.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EventRepository extends JpaRepository<Event, Integer> {

    @Query(value = "from Event where user.userId = :user")
    List<Event> findByUser(@Param("user") Integer user);

    @Query(value = "from Event  where EventId = :event")
    Event findEventByEventId(@Param("event") Integer event);

}
