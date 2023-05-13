package com.DaoImpl;

import com.Dao.SentenceDao;
import com.Entity.Message;
import com.Entity.Sentence;
import com.Repository.SentenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SentenceDaoImpl implements SentenceDao {

    @Autowired
    SentenceRepository sentenceRepository;

    @Override
    public Sentence GetOneByTagAndId(Integer id, String tag)
    {
        List<Sentence> sentences = sentenceRepository.findSentencesByTagAndRobot_id(id, tag);
        int min = 0; // 定义随机数的最小值
        int max = sentences.size() - 1; // 定义随机数的最大值
        // 产生一个2~100的数
        int s = (int) min + (int) (Math.random() * (max - min));
        return sentences.get(s);
    }

    @Override
    public List<Sentence> GetAllById(Integer id)
    {
        return sentenceRepository.findSentencesByRobot_id(id);
    }

    @Override
    public void UpdateSentence(String sent, Integer id)
    {
        sentenceRepository.UpdateMessage(sent, id);
    }

    @Override
    public Sentence FindSentence(Integer id){return sentenceRepository.findSentenceBySentenceId(id);}
}
