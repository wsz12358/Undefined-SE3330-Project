package com.Controller;

import com.Entity.Message;
import com.utils.sessionutils.SessionUtil;
import net.sf.json.JSONObject;
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
    @RequestMapping("/SetMessage")
    public void SetMessage(@RequestBody Map<String, String> params) {
    }
}