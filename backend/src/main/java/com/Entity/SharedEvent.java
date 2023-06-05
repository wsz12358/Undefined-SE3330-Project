package com.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "sharedevents")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler", "event"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "MessageId")
public class SharedEvent {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Integer SharedeventId;

    String sharetime;

    @ManyToOne
    @JoinColumn(name = "event")
    Event event;

    @OneToMany
    @JoinColumn(name = "sharedevent")
    List<Comment> comments;

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public Integer getSharedeventId() {
        return SharedeventId;
    }

    public void setSharedeventId(Integer sharedeventId) {
        this.SharedeventId = sharedeventId;
    }

    public String getSharetime() {
        return sharetime;
    }

    public void setSharetime(String sharetime) {
        this.sharetime = sharetime;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
}
