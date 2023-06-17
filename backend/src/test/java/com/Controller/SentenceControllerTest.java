package com.Controller;

import com.Entity.Sentence;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class SentenceControllerTest {
    @Autowired
    private SentenceController sentenceController;

    @Test
    void getOneByTagAndId() {
        Map<String,String> map = new HashMap<>();
        map.put("tag", "study");
        map.put("robot_id", "1");
        Sentence sentence = sentenceController.GetOneByTagAndId(map);
        assertEquals(sentence.getSentenceId(), 1);
    }

    @Test
    void getByTag() {
        Map<String,String> map = new HashMap<>();
        map.put("robot_id", "1");
        List<Sentence> sentence = sentenceController.GetByTag(map);
        assert sentence.size() == 8;
    }

    @Test
    void updateSentence() {
        Map<String, String> map = new HashMap<>();
        map.put("sentence", "aaa");
        map.put("id", "2");
        Sentence sentence = sentenceController.UpdateSentence(map);
        assert sentence.getSentenceId() == 2;
    }
}