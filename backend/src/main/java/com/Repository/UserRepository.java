package com.Repository;
import com.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface UserRepository extends JpaRepository<User, Integer>{

    @Query(value = "from User where name = :username and password = :password")
    User checkUser(@Param("username") String username, @Param("password") String password);

}
