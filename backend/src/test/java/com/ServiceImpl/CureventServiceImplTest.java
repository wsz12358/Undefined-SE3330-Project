package com.ServiceImpl;

import com.Entity.Curevent;
import com.Repository.UserRepository;
import com.Service.CureventService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CureventServiceImplTest {
    @Autowired
    private CureventService cureventService;

    @Autowired
    private UserRepository userRepository;

    @Test
    void getUserEvent() {
        List<Curevent> curEventList = cureventService.GetUserEvent(1);

        if (curEventList.size() >= 1) {
            assertEquals(curEventList.get(0).getUser().getUserId(), 1);
        }
    }

    @Test
    void addCurevent() {
        Curevent curevent = new Curevent();
        curevent.setDatatype("sys");
        curevent.setMessage("message");
        curevent.setTimestamp("2002/11/11");
        curevent.setUser(userRepository.getUserById(1));
        cureventService.AddCurevent(curevent);

        List<Curevent> curevent1 = cureventService.GetUserEvent(1);
        assert curevent1.size() >= 1;
    }

    @Test
    void deleteCurevent() {
        Curevent curevent = new Curevent();
        curevent.setDatatype("sys");
        curevent.setMessage("message");
        curevent.setTimestamp("2002/11/11");
        curevent.setUser(userRepository.getUserById(1));
        cureventService.AddCurevent(curevent);

        cureventService.DeleteCurevent(1);
        List<Curevent> curevents = cureventService.GetUserEvent(1);

        assertEquals(curevents.size(), 0);
    }
}