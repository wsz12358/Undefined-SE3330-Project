package com.DaoImpl;

import com.Dao.SentenceDao;
import com.Entity.Sentence;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class SentenceDaoImplTest {
    @Autowired
    private SentenceDao sentenceDao;

    @Test
    void getOneByTagAndId() {
        Sentence sentence = sentenceDao.GetOneByTagAndId(1, "study");

        assertEquals("学无止境，您的求知精神实在令人敬佩。不过，博士，也请不要过度透支自己，保重身体哦! \n", sentence.getSentence());
        sentenceDao.UpdateSentence("学无止境，您的求知精神实在令人敬佩。不过，博士，也请不要过度透支自己，保重身体哦! \n", 1);
        Sentence sentence1 = sentenceDao.FindSentence(1);

        assertEquals("学无止境，您的求知精神实在令人敬佩。不过，博士，也请不要过度透支自己，保重身体哦! \n", sentence1.getSentence());
    }

    @Test
    void getAllById() {
        List<Sentence> sentences = sentenceDao.GetAllById(1);

        assertEquals(8, sentences.size());
    }

    @Test
    void updateSentence() {

    }

    @Test
    void findSentence() {
    }
}