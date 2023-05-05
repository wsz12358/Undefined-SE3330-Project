package com.Service;

import com.Entity.Curevent;

import java.util.List;

public interface CureventService {

    List<Curevent> GetAll();

    void AddCurevent(Curevent curevent);

    void DeleteAll();
}
