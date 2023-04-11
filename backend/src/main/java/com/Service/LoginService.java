package com.Service;
import com.Entity.User;
import com.Entity.UserAuth;

public interface LoginService {


    User checkUser(String username, String password);
}
