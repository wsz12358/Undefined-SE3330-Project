package com.Service;
import com.Entity.User;
import com.Entity.UserAuth;

import javax.persistence.criteria.CriteriaBuilder;

public interface LoginService {


    User checkUser(String username, String password);

    User getUser(Integer id);
}
