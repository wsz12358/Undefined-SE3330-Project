package com.ServiceImpl;

import com.Entity.Sentence;
import com.Service.SentenceService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class SentenceServiceImplTest {
    @Autowired
    private SentenceService sentenceService;

    @Test
    void getOneByTagAndId() {
        Sentence sentence = sentenceService.GetOneByTagAndId(1, "study");

        assertEquals(sentence.getSentence(), "学无止境，您的求知精神实在令人敬佩。不过，博士，也请不要过度透支自己，保重身体哦。\n");
    }

    @Test
    void getAllById() {
        List<Sentence> sentences = sentenceService.GetAllById(1);

        assertEquals(sentences.size(), 8);
    }

    @Test
    void updateSentence() {
        sentenceService.UpdateSentence("博士，锻炼是非常好的，能让我们在战斗中更加强大。只是别忘了，过度劳累也是会影响战斗力的哦!", 2);

        Sentence sentence = sentenceService.FindSentence(2);
        assertEquals(sentence.getSentence(), "博士，锻炼是非常好的，能让我们在战斗中更加强大。只是别忘了，过度劳累也是会影响战斗力的哦!");
    }

    @Test
    void findSentence() {
        Sentence sentence = sentenceService.FindSentence(2);

        assertEquals(sentence.getSentence(), "博士，锻炼是非常好的，能让我们在战斗中更加强大。只是别忘了，过度劳累也是会影响战斗力的哦。");
    }
}