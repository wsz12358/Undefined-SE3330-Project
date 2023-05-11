package com.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;

@Entity
@Table(name = "curevent")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "MessageId")
public class Curevent {

    @Id
    @GeneratedValue (strategy= GenerationType.IDENTITY)
    Integer CureventId;

    String timestamp;

    String datatype;

    String message;

    @ManyToOne
    @JoinColumn(name = "user")
    User user;


    public void setCureventId(Integer CureventId)
    {
        this.CureventId = CureventId;
    }

    public void setTimestamp(String timestamp)
    {
        this.timestamp = timestamp;
    }

    public void setDatatype(String datatype)
    {
        this.datatype = datatype;
    }

    public void setMessage(String message)
    {
        this.message = message;
    }

    public Integer getCureventId()
    {
        return CureventId;
    }

    public String getTimestamp()
    {
        return timestamp;
    }

    public String getDatatype()
    {
        return datatype;
    }

    public String getMessage()
    {
        return message;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public User getUser() {
        return user;
    }
}
