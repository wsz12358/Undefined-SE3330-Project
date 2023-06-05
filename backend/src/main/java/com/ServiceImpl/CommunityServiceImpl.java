package com.ServiceImpl;

import com.Dao.CommunityDao;
import com.Entity.Comment;
import com.Entity.Event;
import com.Entity.SharedEvent;
import com.Entity.User;
import com.Service.CommunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class CommunityServiceImpl implements CommunityService {

    @Autowired
    CommunityDao communityDao;

    @Override
    public SharedEvent addEvent(String sharetime, Integer id)
    {
        Event event = communityDao.getEvent(id);
        if (event == null) return null;
        SharedEvent sharedEvent = new SharedEvent();
        sharedEvent.setEvent(event);
        sharedEvent.setSharetime(sharetime);
        communityDao.addSharedEvent(sharedEvent);
        return sharedEvent;
    }

    @Override
    public String deleteEvent(Integer id)
    {
        SharedEvent sharedEvent = communityDao.getSharedEvent(id);
        if (sharedEvent == null) return "no such event!";
        List<Comment> comments = sharedEvent.getComments();
        for (Comment comm : comments)
        {
            communityDao.deleteComment(comm.getCommentId());
        }
        communityDao.deleteSharedEvent(id);
        return "success";
    }

    @Override
    public Comment addComment(String comment, Integer userid, Integer eventid)
    {
        User user = communityDao.getUser(userid);
        if (user == null) return null;
        Comment comm = new Comment();
        comm.setComment(comment);
        comm.setUser(user);
        comm.setSharedevent(eventid);
        communityDao.addComment(comm);
        return comm;
    }

    @Override
    public String deleteComment(Integer id)
    {
        Comment comment = communityDao.getComment(id);
        if (comment == null) return "no such comment!";
        communityDao.deleteComment(id);
        return "success";
    }

}
