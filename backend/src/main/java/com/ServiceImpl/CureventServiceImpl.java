package com.ServiceImpl;

import com.Dao.CureventDao;
import com.Entity.Curevent;
import com.Service.CureventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CureventServiceImpl implements CureventService {

    @Autowired
    CureventDao cureventDao;

    @Override
    public List<Curevent> GetAll()
    {
        return cureventDao.GetAll();
    }

    @Override
    public void AddCurevent(Curevent curevent)
    {
        cureventDao.AddCurevent(curevent);
    }

    @Override
    public void DeleteAll()
    {
        cureventDao.DeleteAll();
    }
}
