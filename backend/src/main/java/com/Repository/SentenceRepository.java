package com.Repository;

import com.Entity.Sentence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface SentenceRepository extends JpaRepository<Sentence, Integer> {

    @Query("from Sentence where tag = :tag and robot_id = :id")
    List<Sentence> findSentencesByTagAndRobot_id(@Param("id") Integer id, @Param("tag") String tag);

    @Modifying@Transactional
    @Query("update Sentence set sentence = :sent where SentenceId = :id")
    Integer UpdateMessage(@Param("sent") String sent, @Param("id") Integer id);

    @Query("from Sentence where robot_id = :id")
    List<Sentence> findSentencesByRobot_id(@Param("id") Integer id);

    @Query("from Sentence where SentenceId = :id")
    Sentence findSentenceBySentenceId(@Param("id") Integer id);

}
