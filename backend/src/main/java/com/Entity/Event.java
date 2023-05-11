package com.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@Entity
@Table(name = "events")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "MessageId")
public class Event {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Integer EventId;
    String name;
    String tags;
    String begintime;
    String finishtime;
    Integer duration;
    Double mul;
    Double lat;

    @ManyToOne
    @JoinColumn(name = "user")
    User user;
    @OneToMany
    @JoinColumn(name = "event")
    List<Message> messages;

    public Integer getEventid() {
        return EventId;
    }

    public void setEventid(Integer EventId) {
        this.EventId = EventId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public String getBegintime() {
        return begintime;
    }

    public void setBegintime(String begintime) {
        this.begintime = begintime;
    }

    public String getFinishtime() {
        return finishtime;
    }

    public void setFinishtime(String finishtime) {
        this.finishtime = finishtime;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public User getUser() {return user;}

    public void setUser(User user) {this.user = user;}

    public Double getLat() {
        return lat;
    }

    public void setLat(Double lat)
    {
        this.lat = lat;
    }

    public Double getMul() {
        return mul;
    }

    public void setMul(Double mul) {
        this.mul = mul;
    }

    public void setMessages(Message message) {
        this.messages.add(message);
    }

    public List<Message> getMessages() {
        return messages;
    }
}
