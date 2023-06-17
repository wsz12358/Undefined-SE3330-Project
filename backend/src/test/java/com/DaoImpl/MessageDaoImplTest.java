package com.DaoImpl;

import com.Dao.MessageDao;
import com.Entity.Message;
import com.Repository.EventRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MessageDaoImplTest {
    @Autowired
    private MessageDao messageDao;

    @Autowired
    private EventRepository eventRepository;

    @Test
    void addMessage() {
        Message message = new Message();
        message.setMessage("as");
        message.setDatatype("msg");
        message.setTimestamp("2002");
        message.setEvent(eventRepository.findEventByEventId(32));

        messageDao.AddMessage(message);
        Message message1 = messageDao.GetMessage(message.getMessageId());
        assertEquals("2002", message1.getTimestamp());

        List<Message> messages = messageDao.GetMessages(32);
        assert messages.size() >= 1;

        messageDao.UpdateMessage("asasasa", message1.getMessageId());
        Message message2 = messageDao.GetMessage(message1.getMessageId());
        assertEquals("asasasa", message2.getMessage());

        messageDao.DeleteMessage(message1.getMessageId());
        message2 = messageDao.GetMessage(message1.getMessageId());
        assert message2 == null;

    }

    @Test
    void getMessages() {
    }

    @Test
    void updateMessage() {
    }

    @Test
    void getMessage() {
    }

    @Test
    void deleteMessage() {
    }
}