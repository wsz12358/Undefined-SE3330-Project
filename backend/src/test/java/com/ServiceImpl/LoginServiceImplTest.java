package com.ServiceImpl;

import com.Entity.User;
import com.Service.LoginService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class LoginServiceImplTest {
    @Autowired
    private LoginService loginService;

    @Test
    void checkUser() {
        User user = loginService.checkUser("group7", "sjtuse2021");

        assertEquals(user.getUserId(), 1);
    }

    @Test
    void getUser() {
    }

    @Test
    void addUser() {
        User user = loginService.addUser("typical", "a", "app");
        assert user == null;

        User user1 = loginService.addUser("typical", "ap", "app");
        assertEquals(user1.getUserAuth().getUsername(), "ap");
        assertEquals(user1.getUserAuth().getPassword(), "app");
    }
}