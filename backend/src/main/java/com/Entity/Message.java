package com.Entity;

import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;

/**
 * @ClassName UserAuth
 * @Description Entity of UserAuth
 * @Author thunderBoy
 * @Date 2019/11/7 13:07
 */

@Entity
@Table(name = "messages")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler", "event"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "MessageId")
public class Message {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer MessageId;

    private String timestamp;

    private String datatype;

    private String message;

    @JSONField(serialize = false)
    @ManyToOne
    @JoinColumn(name = "event")
    private Event event;


    public Integer getMessageId() {
        return MessageId;
    }

    public void setMessageId(Integer messageId) {
        this.MessageId = messageId;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String getDatatype() {
        return datatype;
    }

    public void setDatatype(String datatype) {
        this.datatype = datatype;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Event getEvent() {return event;}
    public void setEvent(Event event) {this.event = event;}
}
