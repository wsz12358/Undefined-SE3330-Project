package com.DaoImpl;

import com.Dao.UserDao;
import com.Entity.User;
import com.Entity.UserAuth;
import com.Repository.UserAuthRepository;
import com.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    UserRepository userRepository;

    @Override
    public User checkUser(String username, String password) {

        User user = userRepository.checkUser(username, password);
        return user;
    }

    @Override
    public User getUser(Integer id)
    {
        return userRepository.getUserById(id);
    }
    @Autowired
    UserAuthRepository userAuthRepository;

    @Override
    public UserAuth checkUserAuth(String username, String password) {

        UserAuth userAuth = userAuthRepository.checkUserAuth(username, password);
        return userAuth;
    }

    @Override
    public UserAuth getUserAuth(Integer id)
    {
        return userAuthRepository.getUserAuthById(id);
    }

    @Override
    public void addUserAuth(UserAuth userAuth)
    {
        userAuthRepository.save(userAuth);
    }
    @Override
    public void addUser(User user)
    {
        userRepository.save(user);
    }

    @Override
    public UserAuth findUserAuthByUsername(String username) {return userAuthRepository.findUserAuthByUsername(username);}
}
