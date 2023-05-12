package com.ServiceImpl;

import com.Constant.LoginConstant;
import com.Dao.UserDao;
import com.Entity.User;
import com.Entity.UserAuth;
import com.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    UserDao userDao;

    @Override
    public User checkUser(String username, String password) {
        User user = userDao.checkUser(username, password);
        return user;
    }

    @Override
    public User getUser(Integer id)
    {
        return  userDao.getUser(id);
    }
}
