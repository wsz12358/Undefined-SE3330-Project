package com.ServiceImpl;

import com.Dao.MessageDao;
import com.Entity.Flag;
import com.Entity.Message;
import com.Service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    MessageDao messageDao;

    @Override
    public Flag AddMessage(Message message)
    {
        return messageDao.AddMessage(message);
    }

    @Override
    public List<Message> GetMessages(Integer user, Integer event){return messageDao.GetMessages(user, event);}
}
