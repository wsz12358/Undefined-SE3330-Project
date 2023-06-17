package com.DaoImpl;

import com.Dao.CureventDao;
import com.Entity.Curevent;
import com.Repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CureventDaoImplTest {
    @Autowired
    private CureventDao cureventDao;

    @Autowired
    private UserRepository userRepository;

    @Test
    void getUserEvent() {
        Curevent curevent = new Curevent();
        curevent.setUser(userRepository.getUserById(1));
        curevent.setMessage("asasa");
        curevent.setTimestamp("2002");
        curevent.setDatatype("msg");

        cureventDao.AddCurevent(curevent);

        List<Curevent> curevent1 = cureventDao.GetUserEvent(1);
        assert curevent1.size() == 1;

        cureventDao.DeleteCurevent(1);
        curevent1 = cureventDao.GetUserEvent(1);
        assert curevent1.size() == 0;
    }

    @Test
    void addCurevent() {
    }

    @Test
    void deleteCurevent() {
    }
}