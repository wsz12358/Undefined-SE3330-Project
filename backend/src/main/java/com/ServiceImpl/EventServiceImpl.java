package com.ServiceImpl;

import com.Dao.EventDao;
import com.Entity.Event;
import com.Entity.Tempevent;
import com.Service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Transactional
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

    @Override
    public void PauseEvent(Tempevent tempevent) {eventDao.PauseEvent(tempevent);}

    @Override
    public Tempevent ContinueEvent(Integer user) {return eventDao.ContinueEvent(user);}

    @Override
    public List<Event> RandEvent()
    {
        List<Event> events = eventDao.GetEvents(1);
        List<Event> randevents = new ArrayList<>();
        for (int i = 0; i < 10; i++)
        {
            Random r = new Random();
            Integer index = 0;
            index = r.nextInt(events.size() - 1) + 1;
            randevents.add(events.get(index));
            events.remove(index);
        }
        return randevents;
    }
}
