package com.Controller;

import com.Constant.MessageConstant;
import com.Entity.Flag;
import com.Entity.Message;
import com.Service.MessageService;
import com.utils.sessionutils.SessionUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.persistence.criteria.CriteriaBuilder;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class MessageController {

    @Autowired
    MessageService messageService;
    @RequestMapping("/SetMessage")
    public Flag SetMessage(@RequestBody Map<String, String> params) {
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
        return messageService.AddMessage(mes);
    }
}