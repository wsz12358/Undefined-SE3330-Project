package com.ServiceImpl;

import com.Dao.MessageDao;
import com.Entity.Message;
import com.Service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class MessageServiceImpl implements MessageService {

    @Autowired
    MessageDao messageDao;

    @Override
    public void AddMessage(Message message) {
        messageDao.AddMessage(message);
    }

    @Override
    public List<Message> GetMessages(Integer event) {
        return messageDao.GetMessages(event);
    }

    @Override
    public void UpdateMessage(String mes, Integer id){messageDao.UpdateMessage(mes, id);}

    @Override
    public Message GetMessage(Integer id)
    {
        return messageDao.GetMessage(id);
    }


}
