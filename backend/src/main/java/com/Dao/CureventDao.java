package com.Dao;

import com.Entity.Curevent;

import java.util.List;

public interface CureventDao {

    void AddCurevent(Curevent curevent);
    void DeleteCurevent(Integer user);
    List<Curevent> GetUserEvent(Integer user);
}
