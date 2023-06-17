package com.Controller;

import com.Entity.Curevent;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CureventControllerTest {
    @Autowired
    private CureventController cureventController;

    @Test
    void getCurEvent() {

        Map<String, String> map1 = new HashMap<>();
        map1.put("timestamp", "2002");
        map1.put("datatype", "msg");
        map1.put("message", "aaaaq");
        map1.put("user", "1");
        cureventController.AddCurevent(map1);

        Map<String, String> map = new HashMap<>();
        map.put("user", "1");
        List<Curevent> curevents = cureventController.GetCurEvent(map);

        assert curevents.size() >= 1;
    }

    @Test
    void addCurevent() {
    }
}