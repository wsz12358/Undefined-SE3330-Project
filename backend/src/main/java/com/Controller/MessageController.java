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

import javax.persistence.criteria.CriteriaBuilder;
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
        String user = params.get(MessageConstant.USER);
        String event = params.get(MessageConstant.EVENT);
        Message mes = new Message();
        mes.setTimestamp(timestamp);
        mes.setDatatype(datatype);
        mes.setMessage(message);
//        mes.setEvent(Integer.valueOf(event));
        messageService.AddMessage(mes);
        return (JSONObject) JSON.toJSON(mes);
    }

    @RequestMapping("/get")
    public JSONArray GetMessages(@RequestBody Map<String, String> params)
    {
        String user =  params.get(MessageConstant.USER);
        String event = params.get(MessageConstant.EVENT);
        List<Message> mes = messageService.GetMessages(Integer.valueOf(event));
        return JSONArray.parseArray(JSON.toJSONString(mes));
    }

    @RequestMapping("/update")
    public JSONObject UpdateMessage(@RequestBody Map<String, String> params)
    {
        String id = params.get(MessageConstant.MESSAGEID);
        String mes = params.get(MessageConstant.MESSAGE);
        messageService.UpdateMessage(mes, Integer.valueOf(id));
        return (JSONObject) JSON.toJSON(messageService.GetMessage(Integer.valueOf(id)));
    }
}