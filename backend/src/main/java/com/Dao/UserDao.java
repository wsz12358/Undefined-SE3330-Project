package com.Dao;

import com.Entity.User;
import com.Entity.UserAuth;

public interface UserDao {

    User checkUser(String username, String password);

    User getUser(Integer id);

    UserAuth checkUserAuth(String username, String password);

    UserAuth getUserAuth(Integer id);

    void addUserAuth(UserAuth userAuth);

    void addUser(User user);


    UserAuth findUserAuthByUsername(String username);
}
