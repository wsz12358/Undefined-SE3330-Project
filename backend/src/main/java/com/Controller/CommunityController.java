package com.Controller;

import com.Constant.CommunityConstant;
import com.Entity.Comment;
import com.Entity.SharedEvent;
import com.Service.CommunityService;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RequestMapping("/community")
@RestController
public class CommunityController {

    @Autowired
    CommunityService communityService;

    @RequestMapping("/event/add")
    public JSONObject addSharedEvent(@RequestBody Map<String, String> params)
    {
        String sharetime = params.get(CommunityConstant.SHARETIME);
        String eventid = params.get(CommunityConstant.EVENTID);
        SharedEvent s = communityService.addEvent(sharetime, Integer.valueOf(eventid));
        return (JSONObject) JSON.toJSON(s);
    }

    @RequestMapping("/comment/add")
    public JSONObject addComment(@RequestBody Map<String, String> params)
    {
        String comment = params.get(CommunityConstant.COMMENT);
        String eventid = params.get(CommunityConstant.SHAREDEVENTID);
        String userid = params.get(CommunityConstant.USERID);
        Comment c = communityService.addComment(comment, Integer.valueOf(userid), Integer.valueOf(eventid));
        return (JSONObject) JSON.toJSON(c);
    }

    @RequestMapping("/comment/delete")
    public JSONObject deleteComment(@RequestBody Map<String, String> params)
    {
        String commentid = params.get(CommunityConstant.COMMENTID);
        String s = communityService.deleteComment(Integer.valueOf(commentid));
        JSONObject obj = new JSONObject();
        obj.put("message", s);
        return obj;
    }

    @RequestMapping("/event/delete")
    public JSONObject deleteEvent(@RequestBody Map<String, String> params)
    {
        String sharedeventid = params.get(CommunityConstant.SHAREDEVENTID);
        String S = communityService.deleteEvent(Integer.valueOf(sharedeventid));
        JSONObject obj = new JSONObject();
        obj.put("message", S);
        return obj;
    }
}
