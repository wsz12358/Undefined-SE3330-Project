package com.DaoImpl;

import com.Dao.MessageDao;
import com.Entity.Event;
import com.Entity.Message;
import com.Repository.EventRepository;
import com.Repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;


@Repository
public class MessageDaoImpl implements MessageDao {

    @Autowired
    MessageRepository messageRepository;

    @Autowired
    EventRepository eventRepository;

    @Override
    public void AddMessage(Message message) {
        messageRepository.save(message);
    }

    @Override
    public List<Message> GetMessages(Integer event) {
        Event e = eventRepository.findEventByEventId(event);

        return messageRepository.findByEvent(e);
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

    @Override
    public void DeleteMessage(Integer id)
    {
        messageRepository.deleteMessageByMessageId(id);
    }
}
