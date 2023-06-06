package com.Controller;
import com.Entity.User;
import com.Service.LoginService;
import com.Constant.LoginConstant;
import com.Entity.UserAuth;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.JSONObjectCodec;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RequestMapping("/log")
@RestController
public class LoginController {

    @Autowired
    LoginService loginService;


    //acoustic:
    //登陆服务 使用fetch通过body发送请求 post类型为"POST"
    @RequestMapping("/login")
    public JSONObject login(@RequestBody Map<String, String> params)
    {
        String username = params.get(LoginConstant.USERNAME);
        String password = params.get(LoginConstant.PASSWORD);
        User user = loginService.checkUser(username, password);
        return (JSONObject) JSON.toJSON(user);
    }

    @RequestMapping("/register")
    public JSONObject Register(@RequestBody Map<String, String> params)
    {
        String username = params.get(LoginConstant.USERNAME);
        String password = params.get(LoginConstant.PASSWORD);
        String usertype = params.get(LoginConstant.USERTYPE);
        User user = loginService.addUser(usertype, username, password);
        if (user == null)
        {
            JSONObject obj = new JSONObject();
            obj.put("message", "U_EXIST");
            return obj;
        }
        else
        {
            JSONObject obj = (JSONObject) JSON.toJSON(user);
            obj.put("message", "SUCCESS");
            return obj;
        }
    }
}
