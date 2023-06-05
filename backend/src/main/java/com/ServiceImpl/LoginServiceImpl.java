package com.ServiceImpl;

import com.Dao.UserDao;
import com.Entity.User;
import com.Entity.UserAuth;
import com.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    @Override
    public User addUser(String usertype, String username, String password)
    {
        UserAuth preuser = userDao.findUserAuthByUsername(username);
        if (preuser != null) return null;
        UserAuth userAuth = new UserAuth();
        userAuth.setUsertype(usertype);
        userAuth.setUsername(username);
        userAuth.setPassword(password);
        userDao.addUserAuth(userAuth);
        User user = new User();
        user.setUserAuth(userAuth);
        userDao.addUser(user);
        return user;
    }
}
