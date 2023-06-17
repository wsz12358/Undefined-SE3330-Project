package com.DaoImpl;

import com.Dao.EventDao;
import com.Entity.Event;
import com.Entity.Tempevent;
import com.Repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class EventDaoImplTest {
    @Autowired
    private EventDao eventDao;

    @Autowired
    private UserRepository userRepository;

    @Test
    void addEvent() {
        Event event = new Event();
        event.setBegintime("2002");
        event.setFinishtime("2003");
        event.setDuration(20);
        event.setLat(12.1);
        event.setMul(12.3);
        event.setUser(userRepository.getUserById(1));
        event.setTags("asas");

        eventDao.AddEvent(event);
        Event event1 = eventDao.GetEvent(event.getEventid());
        assertEquals(12.1, event1.getLat());
        assertEquals("asas", event1.getTags());

        List<Event> events = eventDao.GetEvents(1);
        assert events.size() >= 1;

        List<Event> events1 = eventDao.RandEvent();
        assert events1.size() <= 10;
    }

    @Test
    void getEvents() {
    }

    @Test
    void getEvent() {
    }

    @Test
    void pauseEvent() {
        Tempevent tempevent = new Tempevent();
        tempevent.setBegintime("2002");
        tempevent.setTag("asas");
        tempevent.setUser(userRepository.getUserById(1));
        tempevent.setDuration(20);

        eventDao.PauseEvent(tempevent);
        Tempevent tempevent1 = eventDao.ContinueEvent(1);
        assertEquals(20, tempevent1.getDuration());
    }

    @Test
    void continueEvent() {
    }

    @Test
    void randEvent() {
    }
}