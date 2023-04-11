package com.Dao;

import com.Entity.User;

public interface UserDao {

    User checkUser(String username, String password);
}
