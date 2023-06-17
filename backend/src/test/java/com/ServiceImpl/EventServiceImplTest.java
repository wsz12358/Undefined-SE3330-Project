package com.ServiceImpl;

import com.Entity.Event;
import com.Entity.Tempevent;
import com.Service.EventService;
import com.Service.LoginService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class EventServiceImplTest {
    @Autowired
    EventService eventService;
    @Autowired
    LoginService loginService;

    @Test
    void addEvent() {
        Event event = new Event();
        event.setName("test");
        event.setTags("tags");
        event.setBegintime("2002/11/11/11/11/11");
        event.setFinishtime("2222/11/11/11/11/11");
        event.setDuration(Integer.valueOf("120"));
        event.setLat(Double.valueOf("23.22"));
        event.setMul(Double.valueOf("100.2"));
        eventService.AddEvent(event);

        Event event1 = eventService.GetEvent(event.getEventid());
        assertEquals(event.getBegintime(), event1.getBegintime());
        assertEquals(event.getFinishtime(), event1.getFinishtime());
        assertEquals(event.getTags(), event1.getTags());
        assertEquals(event.getDuration(), event1.getDuration());
    }

    @Test
    void getEvents() {
        List<Event> res = eventService.GetEvents(1);
        assertEquals(11, res.get(0).getDuration());
        assertEquals(10, res.get(1).getDuration());
        assertEquals(18, res.get(2).getDuration());
        assertEquals(13, res.get(3).getDuration());
    }

    @Test
    void getEvent() {
        // is tested via the function addEvent.
    }

    @Test
    void pauseEvent() {
        Tempevent tempevent = new Tempevent();
        tempevent.setBegintime("begintime");
        tempevent.setDuration(Integer.valueOf("1221"));
        tempevent.setTag("tag");
        tempevent.setUser(loginService.getUser(Integer.valueOf("1")));

        eventService.PauseEvent(tempevent);

        Tempevent res = eventService.ContinueEvent(1);
        assertEquals(res.getBegintime(), "begintime");
        assertEquals(res.getDuration(), 1221);
        assertEquals(res.getTag(), "tag");
        assertEquals(res.getUser().getUserId(), 1);
    }

    @Test
    void continueEvent() {
    }

    @Test
    void randEvent() {
        List<Event> eventList = eventService.RandEvent();

        assert eventList.size() <= 10;
    }
}