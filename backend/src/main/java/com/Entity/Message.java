package com.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;

/**
 * @ClassName UserAuth
 * @Description Entity of UserAuth
 * @Author thunderBoy
 * @Date 2019/11/7 13:07
 */

@Entity
@Table(name = "messages")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "MessageId")
public class Message {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "MessageId")
    private Integer MessageId;

    private String timestamp;

    private String datatype;

    private String message;

    private String location;

    private Integer user;


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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
    public void setUser(Integer user) {
        this.user = user;
    }
}
