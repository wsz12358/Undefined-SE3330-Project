package com.ServiceImpl;

import com.Entity.Message;
import com.Repository.EventRepository;
import com.Service.MessageService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MessageServiceImplTest {
    @Autowired
    private MessageService messageService;

    @Autowired
    private EventRepository eventRepository;

    @Test
    void addMessage() {
        Message message = new Message();
        message.setMessage("aa");
        message.setDatatype("msg");
        message.setEvent(eventRepository.findEventByEventId(21));
        messageService.AddMessage(message);

        List<Message> messages = messageService.GetMessages(21);
        assert messages.size() >= 1;
    }

    @Test
    void getMessages() {
    }

    @Test
    void updateMessage() {

    }

    @Test
    void getMessage() {
        Message message = messageService.GetMessage(28);
        assertEquals(message.getMessage(), "qsqsqsqsqs");

        messageService.UpdateMessage("asas", 28);
        message = messageService.GetMessage(28);
        assertEquals(message.getMessage(), "asas");

        messageService.DeleteMessage(28);
        message = messageService.GetMessage(28);
        assert message == null;
    }

    @Test
    void deleteMessage() {
    }
}