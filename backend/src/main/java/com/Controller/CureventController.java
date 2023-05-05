package com.Controller;

import com.Constant.EventConstant;
import com.Constant.MessageConstant;
import com.Entity.Curevent;
import com.Service.CureventService;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RequestMapping("/curevent")
@RestController
public class CureventController {
    @Autowired
    CureventService cureventService;

    @RequestMapping("/get")
    public JSONArray GetCurEvent()
    {
        return JSONArray.parseArray(JSON.toJSONString(cureventService.GetAll()));
    }

    @RequestMapping("/save")
    public JSONObject AddCurevent(@RequestBody Map<String, String> params)
    {
        String timestamp = params.get(MessageConstant.TIMESTAMP);
        String datatype = params.get(MessageConstant.DATATYPE);
        String message = params.get(MessageConstant.MESSAGE);

        Curevent curevent = new Curevent();
        curevent.setTimestamp(timestamp);
        curevent.setDatatype(datatype);
        curevent.setMessage(message);

        cureventService.AddCurevent(curevent);
        return (JSONObject) JSON.toJSON(curevent);

    }
}
