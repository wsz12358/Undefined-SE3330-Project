package com.Repository;

import com.Entity.User;
import com.Entity.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserAuthRepository extends JpaRepository<UserAuth, Integer> {
    @Query(value = "select * from UserAuth where username = :username and password = :password", nativeQuery = true)
    UserAuth checkUserAuth(@Param("username") String username, @Param("password") String password);

    @Query(value = "from UserAuth where userauthId = :id")
    UserAuth getUserAuthById(@Param("id") Integer id);

    @Query(value = "select * from UserAuth where username = :username", nativeQuery = true)
    UserAuth findUserAuthByUsername(@Param("username") String username);
}
