package com.DaoImpl;

import com.Dao.CommunityDao;
import com.Entity.Comment;
import com.Entity.Event;
import com.Entity.SharedEvent;
import com.Entity.User;
import com.Repository.CommentRepository;
import com.Repository.EventRepository;
import com.Repository.SharedEventRepository;
import com.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CommunityDaoImpl implements CommunityDao {

    @Autowired
    SharedEventRepository sharedEventRepository;

    @Autowired
    CommentRepository commentRepository;

    @Autowired
    EventRepository eventRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public void addSharedEvent(SharedEvent sharedEvent)
    {
        sharedEventRepository.save(sharedEvent);
    }

    @Override
    public void deleteSharedEvent(Integer id)
    {
        sharedEventRepository.deleteSharedEventBySharedeventId(id);
    }

    @Override
    public SharedEvent getSharedEvent(Integer id)
    {
        return sharedEventRepository.findSharedEventBySharedeventId(id);
    }
    public void addComment(Comment comment)
    {
        commentRepository.save(comment);
    }

    @Override
    public void deleteComment(Integer id)
    {
        commentRepository.deleteCommentByCommentId(id);
    }

    @Override
    public Comment getComment(Integer id)
    {
        return commentRepository.findCommentByCommentId(id);
    }

    @Override
    public Event getEvent(Integer id)
    {
        return eventRepository.findEventByEventId(id);
    }

    @Override
    public User getUser(Integer id)
    {
        return userRepository.getUserById(id);
    }

    @Override
    public List<SharedEvent> getSharedEvents()
    {
        return sharedEventRepository.findAll();
    }
}
