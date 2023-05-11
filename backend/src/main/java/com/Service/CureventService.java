package com.Service;

import com.Entity.Curevent;

import java.util.List;

public interface CureventService {

    List<Curevent> GetUserEvent(Integer user);

    void AddCurevent(Curevent curevent);

    void DeleteAll();
}
