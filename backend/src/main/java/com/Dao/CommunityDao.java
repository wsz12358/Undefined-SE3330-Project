package com.Dao;

import com.Entity.Comment;
import com.Entity.Event;
import com.Entity.SharedEvent;
import com.Entity.User;

public interface CommunityDao
{
    void addSharedEvent(SharedEvent sharedEvent);

    void deleteSharedEvent(Integer eventid);

    SharedEvent getSharedEvent(Integer id);

    void addComment(Comment comment);

    void deleteComment(Integer commentid);

    Comment getComment(Integer id);

    Event getEvent(Integer id);

    User getUser(Integer id);
}
