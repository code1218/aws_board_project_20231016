package com.korit.board.repository;

import com.korit.board.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.bind.annotation.Mapping;

@Mapper
public interface UserMapper {

    public int saveUser(User user);
    public int checkDuplicate(User user);
    public User findUserByEmail(String email);
    public int updateEnabledToEmail(String email);
}
