package com.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@Table(name = "comments")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler", "event"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "MessageId")
public class Comment {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    Integer CommentId;

    String comment;

    @ManyToOne
    @JoinColumn(name = "user")
    User user;

    Integer sharedevent;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Integer getCommentId() {
        return CommentId;
    }

    public void setCommentId(Integer commentId) {
        CommentId = commentId;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Integer getSharedevent() {
        return sharedevent;
    }

    public void setSharedevent(Integer sharedevent) {
        this.sharedevent = sharedevent;
    }
}
