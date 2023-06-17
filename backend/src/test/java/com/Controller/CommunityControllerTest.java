package com.Controller;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
class CommunityControllerTest {
    @Autowired
    private CommunityController communityController;

    @Test
    void addSharedEvent() {
        Map<String, String> map = new HashMap<>();
        map.put("sharetime", "12");
        map.put("eventid", "21");
        assertEquals(null, communityController.addSharedEvent(map));
    }

    @Test
    void addComment() {
    }

    @Test
    void deleteComment() {
    }

    @Test
    void deleteEvent() {
    }

    @Test
    void getRand() {
    }
}