package com.ServiceImpl;

import com.Dao.SentenceDao;
import com.Entity.Sentence;
import com.Service.SentenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class SentenceServiceImpl implements SentenceService {

    @Autowired
    SentenceDao sentenceDao;

    @Override
    public Sentence GetOneByTagAndId(Integer id, String tag)
    {
        return sentenceDao.GetOneByTagAndId(id, tag);
    }

    @Override
    public List<Sentence> GetAllById(Integer id)
    {
        return sentenceDao.GetAllById(id);
    }

    @Override
    public void UpdateSentence(String sent, Integer id)
    {
        sentenceDao.UpdateSentence(sent, id);
    }

    @Override
    public Sentence FindSentence(Integer id)
    {
        return sentenceDao.FindSentence(id);
    }

}
