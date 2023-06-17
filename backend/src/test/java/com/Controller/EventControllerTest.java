package com.Controller;

import com.Entity.Event;
import com.Entity.Message;
import com.Entity.Tempevent;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class EventControllerTest {

    @Autowired
    private EventController eventController;

    @Test
    void addEvent() {
        Map<String, String> map = new HashMap<>();
        map.put("tags", "aaa");
        map.put("begintime", "2002");
        map.put("finishtime", "2003");
        map.put("duration", "20");
        map.put("user", "1");
        map.put("lat", "12.2");
        map.put("mul", "13.2");

        eventController.AddEvent(map);

        Map<String, String> map1 = new HashMap<>();
        map1.put("user", "1");

        List<Event> events = eventController.GetEvents(map1);
        assert events.size() >= 1;

        Map<String, String> map2 = new HashMap<>();
        map2.put("eventid", "32");

        Event event = eventController.GetMessage(map2);

        assert event.getEventid() == 32;

        List<Event> events1 = eventController.GetRand(new HashMap<>());
        assert events1.size() <= 10;
    }

    @Test
    void getEvents() {
    }

    @Test
    void getMessage() {
    }

    @Test
    void pauseEvent() {
        Map<String, String> map = new HashMap<>();
        map.put("begintime", "2002");
        map.put("duration", "20");
        map.put("tags", "ssss");
        map.put("user", "1");

        Tempevent tempevent = eventController.PauseEvent(map);
        assertEquals(tempevent.getUser().getUserId(), 1);
        assertEquals(tempevent.getBegintime(), "2002");

        Map<String, String> map1 = new HashMap<>();
        map1.put("user", "1");

        Tempevent tempevent1 = eventController.ContinueEvent(map1);

        assertEquals(1, tempevent1.getUser().getUserId());
    }

    @Test
    void continueEvent() {
    }

    @Test
    void getRand() {
    }
}