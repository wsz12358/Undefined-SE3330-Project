package com.Repository;

import com.Entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface CommentRepository  extends JpaRepository<Comment, Integer> {
    @Modifying@Transactional
    @Query("delete from Comment where CommentId = :id")
    void deleteCommentByCommentId(@Param("id") Integer id);

    @Query("from Comment where CommentId = :id")
    Comment findCommentByCommentId(@Param("id") Integer id);
}
