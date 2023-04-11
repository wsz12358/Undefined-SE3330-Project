package com.Dao;

import com.Entity.Flag;
import com.Entity.Message;

import java.util.List;

public interface MessageDao {

    public void AddMessage(Message message);

    public List<Message> GetMessages(Integer user, Integer event);
}
