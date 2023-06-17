package com.DaoImpl;

import com.Dao.CommunityDao;
import com.Entity.Comment;
import com.Entity.SharedEvent;
import com.Repository.EventRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CommunityDaoImplTest {
    @Autowired
    private CommunityDao communityDao;

    @Test
    void addSharedEvent() {
        SharedEvent sharedEvent = new SharedEvent();
        sharedEvent.setEvent(communityDao.getEvent(32));
        sharedEvent.setSharetime("2002");
        sharedEvent.setComments(new ArrayList<>());

        communityDao.addSharedEvent(sharedEvent);
        SharedEvent getEvent = communityDao.getSharedEvent(sharedEvent.getSharedeventId());
        assertEquals(32, getEvent.getEvent().getEventid());

        Comment comment = new Comment();
        comment.setUser(communityDao.getUser(1));
        comment.setComment("aaa");
        comment.setSharedevent(sharedEvent.getSharedeventId());

        communityDao.addComment(comment);

        Comment comment1 = communityDao.getComment(comment.getCommentId());
        assertEquals(1, comment1.getUser().getUserId());

        communityDao.deleteComment(comment1.getCommentId());

        Comment comment2 = communityDao.getComment(comment.getCommentId());
        assert comment2 == null;

        communityDao.deleteSharedEvent(sharedEvent.getSharedeventId());

        SharedEvent sharedEvent1 = communityDao.getSharedEvent(sharedEvent.getSharedeventId());
        assert sharedEvent1 == null;

    }

    @Test
    void deleteSharedEvent() {
    }

    @Test
    void getSharedEvent() {
    }

    @Test
    void addComment() {
    }

    @Test
    void deleteComment() {
    }

    @Test
    void getComment() {
    }

    @Test
    void getEvent() {
    }

    @Test
    void getUser() {
    }

    @Test
    void getSharedEvents() {
        List<SharedEvent> sharedEvents = communityDao.getSharedEvents();

        assert sharedEvents.size() >= 3;
    }
}