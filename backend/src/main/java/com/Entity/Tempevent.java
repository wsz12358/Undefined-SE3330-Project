package com.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;

@Entity
@Table(name = "tempevent")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "MessageId")
public class Tempevent {

    @Id
    @GeneratedValue (strategy= GenerationType.IDENTITY)
    Integer TempeventId;

    String begintime;

    Integer duration;

    String tag;

    @ManyToOne
    @JoinColumn(name = "user")
    User user;

    public void setTempeventId(Integer tempeventId) {
        TempeventId = tempeventId;
    }

    public void setBegintime(String begintime) {
        this.begintime = begintime;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Integer getTempeventId() {
        return TempeventId;
    }

    public Integer getDuration() {
        return duration;
    }

    public String getBegintime() {
        return begintime;
    }

    public String getTag() {
        return tag;
    }

    public User getUser() {
        return user;
    }
}

