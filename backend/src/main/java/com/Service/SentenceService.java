package com.Service;

import com.Entity.Sentence;

import java.util.List;

public interface SentenceService {

    Sentence GetOneByTagAndId(Integer id, String tag);

    List<Sentence> GetAllById(Integer id);

    void UpdateSentence(String sent, Integer id);

    Sentence FindSentence(Integer id);
}
