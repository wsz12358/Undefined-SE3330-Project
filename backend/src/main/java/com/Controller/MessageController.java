package com.Controller;

import com.Constant.MessageConstant;
import com.Entity.Message;
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


@RequestMapping("/message")
@RestController
public class MessageController {

    @Autowired
    MessageService messageService;
    @RequestMapping("/add")
    public JSONObject AddMessage(@RequestBody Map<String, String> params) {
        String timestamp = params.get(MessageConstant.TIMESTAMP);
        String datatype = params.get(MessageConstant.DATATYPE);
        String message = params.get(MessageConstant.MESSAGE);
        String location = params.get(MessageConstant.LOCATION);
        String user = params.get(MessageConstant.USER);
        Message mes = new Message();
        mes.setTimestamp(timestamp);
        mes.setDatatype(datatype);
        mes.setMessage(message);
        mes.setLocation(location);
        mes.setUser(Integer.valueOf(user));
        messageService.AddMessage(mes);
        return (JSONObject) JSON.toJSON(mes);
    }

    @RequestMapping("/get")
    public JSONArray GetMessages(@RequestBody Map<String, String> params)
    {
        String user =  params.get(MessageConstant.USER);
        String event = params.get(MessageConstant.EVENT);
        List<Message> mes = messageService.GetMessages(Integer.valueOf(user), Integer.valueOf(event));
        return JSONArray.parseArray(JSON.toJSONString(mes));
    }
}