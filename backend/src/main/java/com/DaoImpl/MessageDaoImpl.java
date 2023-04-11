package com.DaoImpl;

import com.Dao.MessageDao;
import com.Entity.Flag;
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
    public Flag AddMessage(Message message)
    {
        messageRepository.save(message);
        return new Flag(true);
    }

    @Override
    public List<Message> GetMessages(Integer user, Integer event){

        return messageRepository.findByUserAndEvent(user, event);
    }
}
