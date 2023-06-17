package com.DaoImpl;

import com.Dao.UserDao;
import com.Entity.User;
import com.Entity.UserAuth;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserDaoImplTest {
    @Autowired
    private UserDao userDao;

    @Test
    void checkUser() {
        User user = userDao.checkUser("group7", "sjtuse2021");
        User user1 = userDao.getUser(1);
        assertEquals(user.getUserId(), user1.getUserId());

        UserAuth user2 = userDao.findUserAuthByUsername("group7");
        assertEquals(user2.getUserId(), user1.getUserId());
    }

    @Test
    void getUser() {
    }

    @Test
    void checkUserAuth() {
       UserAuth userAuth = userDao.checkUserAuth("group7", "sjtuse2021");
       UserAuth userAuth1 = userDao.getUserAuth(1);

       assertEquals(userAuth1.getUsername(), userAuth.getUsername());
    }

    @Test
    void getUserAuth() {
    }

    @Test
    void addUserAuth() {
    }

    @Test
    void addUser() {
        User user = new User();
        UserAuth userAuth = new UserAuth();
        userAuth.setPassword("aaa");
        userAuth.setUsername("asas");
        userDao.addUserAuth(userAuth);
        user.setUserAuth(userAuth);
        userDao.addUser(user);

        User user1 = userDao.getUser(user.getUserId());
        assertEquals(user1.getUserId(), user.getUserId());
    }

    @Test
    void findUserAuthByUsername() {
    }
}