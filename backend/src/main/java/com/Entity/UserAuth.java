package com.Entity;

import com.alibaba.fastjson.annotation.JSONField;
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
@Table(name = "userauth")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
@JsonIdentityInfo(generator =      ObjectIdGenerators.PropertyGenerator.class,property = "userId")
public class UserAuth {

    @Id
    @Column(name = "userauthId")
    @GeneratedValue (strategy= GenerationType.IDENTITY)
    private Integer userauthId;
    private String username;

    @JSONField(serialize = false)
    private String password;
    private String usertype;

    public Integer getUserId() {
        return userauthId;
    }

    public void setUserId(Integer userId) {
        this.userauthId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsertype() {
        return usertype;
    }

    public void setUsertype(String userType) {
        this.usertype = userType;
    }
}
