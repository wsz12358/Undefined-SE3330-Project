package com.DaoImpl;

import com.Dao.MessageDao;
import com.Entity.Message;
import com.Repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;


@Repository
public class MessageDaoImpl implements MessageDao {

    @Autowired
    MessageRepository messageRepository;

    @Override
    public void AddMessage(Message message) {
        messageRepository.save(message);
    }

    @Override
    public List<Message> GetMessages(Integer event) {

        return messageRepository.findByEvent(event);
    }

    @Override
    public void UpdateMessage(String mes, Integer id)
    {
        messageRepository.UpdateMessage(mes, id);
    }

    @Override
    public Message GetMessage(Integer id)
    {
        return messageRepository.findByMessageId(id);
    }
}
