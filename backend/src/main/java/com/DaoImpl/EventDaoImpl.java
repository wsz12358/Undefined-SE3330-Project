package com.DaoImpl;

import com.Dao.EventDao;
import com.Entity.Event;
import com.Entity.Tempevent;
import com.Repository.EventRepository;
import com.Repository.TempeventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EventDaoImpl implements EventDao {

    @Autowired
    EventRepository eventRepository;

    @Autowired
    TempeventRepository tempeventRepository;

    @Override
    public void AddEvent(Event event)
    {
        eventRepository.save(event);
    }

    @Override
    public List<Event> GetEvents(Integer user){return eventRepository.findByUser(user);}

    @Override
    public Event GetEvent(Integer event)
    {
        return eventRepository.findEventByEventId(event);
    }

    @Override
    public void PauseEvent(Tempevent tempevent)
    {
        tempeventRepository.save(tempevent);
    }

    @Override
    public Tempevent ContinueEvent(Integer user)
    {
        Tempevent temp = tempeventRepository.findTempeventByUser(user);
        tempeventRepository.deleteTempeventByUser(user);
        return temp;
    }

    @Override
    public  List<Event> RandEvent()
    {
        return eventRepository.RandEvent();
    }
}
