package com.ServiceImpl;

import com.Entity.SharedEvent;
import com.Service.CommunityService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CommunityServiceImplTest {
    @Autowired
    private CommunityService communityService;

    @Test
    void addEvent() {
        SharedEvent sharedEvent = communityService.addEvent("2002/11", 21);

        assertEquals(sharedEvent.getSharetime(), "2002/11");
        assertEquals(sharedEvent.getEvent().getEventid(), 21);
    }

    @Test
    void deleteEvent() {
        SharedEvent sharedEvent = communityService.addEvent("2002/11", 21);
        communityService.addComment("a", 1, sharedEvent.getSharedeventId());

        assertEquals(communityService.deleteEvent(sharedEvent.getSharedeventId()), "success");
        assertEquals(communityService.deleteEvent(sharedEvent.getSharedeventId()), "no such event!");
    }

    @Test
    void addComment() {
    }

    @Test
    void deleteComment() {
        SharedEvent sharedEvent = communityService.addEvent("2002/11", 21);
        communityService.addComment("a", 1, sharedEvent.getSharedeventId());

        assertEquals(communityService.deleteComment(1), "no such comment!");
    }

    @Test
    void getSharedEvents() {
        List<SharedEvent> sharedEvents = communityService.getSharedEvents();

        assert sharedEvents.size() <= 5;
    }
}