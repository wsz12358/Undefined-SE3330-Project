package com.Controller;

import com.Entity.User;
import com.alibaba.fastjson.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class LoginControllerTest {
    @Autowired
    private LoginController loginController;

    @Test
    void login() {
        Map<String, String> map = new HashMap<>();
        map.put("username", "group7");
        map.put("password", "sjtuse2021");
        User user = loginController.login(map);

        assertEquals(user.getUserAuth().getUsername(), "group7");
        assertEquals(user.getUserAuth().getPassword(), "sjtuse2021");
    }

    @Test
    void register() {
        Map<String, String> map = new HashMap<>();
        map.put("username", "po");
        map.put("password", "op");

        JSONObject object = loginController.Register(map);
        assertEquals(object.get("message"), "SUCCESS");

        Map<String, String> map1 = new HashMap<>();
        map1.put("username", "group7");
        map1.put("password", "sjtuse2021");

        JSONObject object1 = loginController.Register(map);
        assertEquals(object1.get("message"), "U_EXIST");
    }
}