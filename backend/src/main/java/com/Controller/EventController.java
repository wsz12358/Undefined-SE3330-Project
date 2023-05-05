package com.Controller;

import com.Constant.EventConstant;
import com.Constant.MessageConstant;
import com.Entity.Curevent;
import com.Entity.Event;
import com.Entity.Message;
import com.Service.CureventService;
import com.Service.EventService;
import com.Service.LoginService;
import com.Service.MessageService;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RequestMapping("/event")
@RestController
public class EventController {

    @Autowired
    EventService eventService;

    @Autowired
    LoginService loginService;

    @Autowired
    CureventService cureventService;

    @Autowired
    MessageService messageService;

    @RequestMapping("/add")
    public JSONObject AddEvent(@RequestBody Map<String, String> params)
    {
        String name = params.get(EventConstant.NAME);
        String tags = params.get(EventConstant.TAGS);
        String begintime = params.get(EventConstant.BEGINTIME);
        String finishtime = params.get(EventConstant.FINISHTIME);
        String duration = params.get(EventConstant.DURATION);
        String user = params.get(EventConstant.USER);
        String lat = params.get(EventConstant.LATITUDE);
        String mul = params.get(EventConstant.MULTITUDE);
        Event event = new Event();
        event.setName(name);
        event.setTags(tags);
        event.setBegintime(begintime);
        event.setFinishtime(finishtime);
        event.setDuration(duration);
        event.setLat(Double.valueOf(lat));
        event.setMul(Double.valueOf(mul));

        event.setUser(loginService.getUser(Integer.valueOf(user)));
        eventService.AddEvent(event);

        List<Curevent> curs = cureventService.GetAll();

        for (Curevent cur: curs)
        {
            Message message = new Message();
            message.setTimestamp(cur.getTimestamp());
            message.setDatatype(cur.getDatatype());
            message.setMessage(cur.getMessage());
            message.setEvent(event);
            messageService.AddMessage(message);
//            event.setMessages(message);
        }

        eventService.AddEvent(event);
//        cureventService.DeleteAll();

        return (JSONObject) JSON.toJSON(event);
    }

    @RequestMapping("/get")
    public JSONArray GetMessages(@RequestBody Map<String, String> params)
    {
        String user =  params.get(EventConstant.USER);
        List<Event> mes = eventService.GetEvents(Integer.valueOf(user));
        return JSONArray.parseArray(JSON.toJSONString(mes));
    }

    @RequestMapping("/getbyid")
    public JSONObject GetMessage(@RequestBody Map<String, String> params)
    {
        String eventid =  params.get(EventConstant.EVENTID);
        Event mes = eventService.GetEvent(Integer.valueOf(eventid));
        return (JSONObject) JSON.toJSON(mes);
    }
}
