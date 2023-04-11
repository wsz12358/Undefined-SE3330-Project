package com.DaoImpl;

import com.Dao.MessageDao;
import com.Entity.Message;
import com.Repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class MessageDaoImpl implements MessageDao {

    @Autowired
    MessageRepository messageRepository;

    @Override
    public void AddMessage(Message message) {
        messageRepository.save(message);
    }

    @Override
    public List<Message> GetMessages(Integer user, Integer event) {

        return messageRepository.findByUserAndEvent(user, event);
    }
}
