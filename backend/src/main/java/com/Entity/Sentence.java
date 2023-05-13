package com.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@Table(name = "sentence_")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "MessageId")
public class Sentence {


    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Integer SentenceId;

    Integer robot_id;

    String sentence;

    String tag;

    public Integer getSentenceId() {
        return SentenceId;
    }

    public void setSentenceId(Integer sentenceId) {
        SentenceId = sentenceId;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getSentence() {
        return sentence;
    }

    public void setSentence(String sentence) {
        this.sentence = sentence;
    }

    public Integer getRobot_id() {
        return robot_id;
    }

    public void setRobot_id(Integer robot_id) {
        this.robot_id = robot_id;
    }
}
