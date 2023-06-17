package com.Controller;

import com.Entity.Comment;
import com.Entity.SharedEvent;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;
import java.util.List;
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
        map.put("eventid", "32");
        SharedEvent sharedEvent = communityController.addSharedEvent(map);
        assertEquals("12", sharedEvent.getSharetime());
        assertEquals(32, sharedEvent.getEvent().getEventid());
    }

    @Test
    void addComment() {
        Map<String, String> map = new HashMap<>();
        map.put("userid", "1");
        map.put("sharedeventid", "3");
        map.put("comment", "aaa");
        Comment comment = communityController.addComment(map);

        assertEquals(1, comment.getUser().getUserId());
        assertEquals(3, comment.getSharedevent());
    }

    @Test
    void deleteComment() {
        Map<String, String> map = new HashMap<>();
        map.put("userid", "1");
        map.put("sharedeventid", "3");
        map.put("comment", "aaa");
        Comment comment = communityController.addComment(map);

        Map<String, String> map1 = new HashMap<>();
        map1.put("commentid", comment.getCommentId().toString());

        JSONObject object = communityController.deleteComment(map1);
        assertEquals("success", object.get("message"));
    }

    @Test
    void deleteEvent() {
        Map<String, String> map = new HashMap<>();
        map.put("sharetime", "12");
        map.put("eventid", "32");
        SharedEvent sharedEvent = communityController.addSharedEvent(map);

        Map<String, String> map1 = new HashMap<>();
        map1.put("sharedeventid", sharedEvent.getSharedeventId().toString());
        JSONObject object = communityController.deleteEvent(map1);

        assertEquals("success", object.get("message"));
    }

    @Test
    void getRand() {
        List<SharedEvent> sharedEventList = communityController.getRand();
        assert sharedEventList.size() >= 3;
    }
}