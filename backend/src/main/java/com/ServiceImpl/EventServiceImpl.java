package com.ServiceImpl;

import com.Dao.EventDao;
import com.Entity.Event;
import com.Service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    EventDao eventDao;

    @Override
    public void AddEvent(Event event)
    {
        eventDao.AddEvent(event);
    }

    @Override
    public List<Event> GetEvents(Integer user) {return eventDao.GetEvents(user);}

    @Override
    public Event GetEvent(Integer event)
    {
        return eventDao.GetEvent(event);
    }
}
