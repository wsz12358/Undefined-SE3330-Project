package com.Service;

import com.Entity.Message;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

public interface MessageService {

    public void AddMessage(Message message);
    public List<Message> GetMessages(Integer event);

    public void UpdateMessage(String mes, Integer id);

    public Message GetMessage(Integer id);
}
