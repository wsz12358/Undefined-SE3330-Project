package com.DaoImpl;

import com.Dao.EventDao;
import com.Entity.Event;
import com.Repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EventDaoImpl implements EventDao {

    @Autowired
    EventRepository eventRepository;

    @Override
    public void AddEvent(Event event)
    {
        eventRepository.save(event);
    }

    @Override
    public List<Event> GetEvents(Integer user){return eventRepository.findByUser(user);}
}
