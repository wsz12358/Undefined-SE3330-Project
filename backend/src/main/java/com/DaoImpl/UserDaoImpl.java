package com.DaoImpl;

import com.Dao.UserDao;
import com.Entity.User;
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
}
