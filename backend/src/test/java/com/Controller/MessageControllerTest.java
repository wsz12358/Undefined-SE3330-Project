package com.Controller;

import com.Entity.Message;
import com.alibaba.fastjson.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MessageControllerTest {

    @Autowired
    private MessageController messageController;

    @Test
    void addMessage() {
        Map<String, String> map = new HashMap<>();
        map.put("timestamp", "2002");
        map.put("datatype", "system");
        map.put("message", "aaa");
        map.put("event", "51");

        Message message = messageController.AddMessage(map);
        assertEquals(51, message.getEvent().getEventid());

        Map<String, String> map1 = new HashMap<>();
        map1.put("event", "51");

        List<Message> messages = messageController.GetMessages(map1);
        assert messages.size() >= 1;

        Map<String, String> map2 = new HashMap<>();
        map2.put("id", "27");
        JSONObject object = messageController.DeleteMessage(map2);
        assertEquals(object.get("message"), "fail");

        Map<String, String> map3 = new HashMap<>();
        map3.put("id", "95");
        JSONObject object1 = messageController.DeleteMessage(map3);
        assertEquals(object1.get("message"), "success");


    }

    @Test
    void getMessages() {
    }

    @Test
    void updateMessage() {
        Map<String, String> map = new HashMap<>();
        map.put("message", "as");
        map.put("id", "92");

        Message message = messageController.UpdateMessage(map);
        assertEquals(92, message.getMessageId());
    }

    @Test
    void deleteMessage() {
    }
}