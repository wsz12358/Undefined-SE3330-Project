package com.Dao;

import com.Entity.Curevent;

import java.util.List;

public interface CureventDao {

    void AddCurevent(Curevent curevent);
    void DeleteAll();

    List<Curevent> GetAll();
}
