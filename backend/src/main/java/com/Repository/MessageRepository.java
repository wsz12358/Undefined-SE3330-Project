package com.Repository;
import com.Entity.Event;
import com.Entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;


public interface MessageRepository extends JpaRepository<Message, Integer>
{
    @Query(value = "from Message where event = :event")
    List<Message> findByEvent(@Param("event") Event event);

    @Modifying@Transactional
    @Query("update Message set message = :message where MessageId = :id")
    Integer UpdateMessage(@Param("message") String message, @Param("id") Integer id);

    @Query("from Message where MessageId = :id")
    Message findByMessageId(@Param("id") Integer id);
    @Modifying@Transactional
    @Query("delete from Message where MessageId = :id")
    void deleteMessageByMessageId(@Param("id") Integer id);
}
