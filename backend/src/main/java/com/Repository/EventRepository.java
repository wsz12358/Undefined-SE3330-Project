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

    @Query(value = "SELECT * FROM events as t1 WHERE t1.event_id>=(RAND()*(SELECT MAX(event_id) FROM events))LIMIT 1;", nativeQuery = true)
    List<Event> RandEvent();

}
