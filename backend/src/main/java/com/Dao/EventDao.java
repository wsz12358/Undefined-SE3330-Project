package com.Dao;

import com.Entity.Event;
import com.Entity.Message;

import java.util.List;

public interface EventDao {

    public void AddEvent(Event event);

    public List<Event> GetEvents(Integer user);

    public Event GetEvent(Integer event);
}
