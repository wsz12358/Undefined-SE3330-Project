package com.ServiceImpl;

import com.Entity.UserAuth;
import com.Service.LoginService;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class LoginServiceImpl implements LoginService {

    @Override
    public UserAuth checkUser(String username, String password) {
        if (Objects.equals(username, "group7") && Objects.equals(password, "sjtuse2021"))
        {
            UserAuth userAuth = new UserAuth();
            userAuth.setUsername(username);
            userAuth.setPassword(password);
            return userAuth;
        }
        return null;
    }
}
