package com.Controller;

import com.Constant.SentenceConstant;
import com.Entity.Sentence;
import com.Service.SentenceService;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RequestMapping("/sentence")
@RestController
public class SentenceController {

    @Autowired
    SentenceService sentenceService;

    @RequestMapping("/getone")
    public JSONObject GetOneByTagAndId(@RequestBody Map<String, String> params)
    {
        String tag = params.get(SentenceConstant.TAG);
        String id = params.get(SentenceConstant.ROBOTID);
        return (JSONObject) JSON.toJSON(sentenceService.GetOneByTagAndId(Integer.valueOf(id), tag));
    }

    @RequestMapping("/get")
    public JSONArray GetByTag(@RequestBody Map<String, String> params)
    {
        String id = params.get(SentenceConstant.ROBOTID);
        return JSONArray.parseArray(JSON.toJSONString(sentenceService.GetAllById(Integer.valueOf(id))));
    }

    @RequestMapping("/update")
    public JSONObject UpdateSentence(@RequestBody Map<String, String> params)
    {
        String sent = params.get(SentenceConstant.SENTENCE);
        String id = params.get(SentenceConstant.SENTENCEID);
        sentenceService.UpdateSentence(sent, Integer.valueOf(id));
        return (JSONObject) JSON.toJSON(sentenceService.FindSentence(Integer.valueOf(id)));
    }
}
