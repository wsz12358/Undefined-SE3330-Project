package com.Service;

import com.Entity.Comment;
import com.Entity.SharedEvent;

import java.util.List;

public interface CommunityService {
    SharedEvent addEvent(String sharetime, Integer id);

    String deleteEvent(Integer id);

    Comment addComment(String comment, Integer userid, Integer eventid);

    String deleteComment(Integer id);

    List<SharedEvent> getSharedEvents();
}
