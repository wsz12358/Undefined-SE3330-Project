package com.Service;
import com.Entity.UserAuth;

public interface LoginService {


    UserAuth checkUser(String username, String password);
}
