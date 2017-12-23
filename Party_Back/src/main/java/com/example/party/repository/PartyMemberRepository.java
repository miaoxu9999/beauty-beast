package com.example.party.repository;

import com.example.party.model.PartyMember;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @Author: miaoxu
 * @Description:
 * @Date: Created in 2017/12/4 0004
 * @Modified By :
 */
public interface PartyMemberRepository extends JpaRepository<PartyMember, Integer>{

    default void deleteByID(Long l) {
        this.delete(l.intValue());
    }

    public List<PartyMember> findBystudentIDAndPassword(String studentID, String password);
    //通过姓名查询
//    public List<PartyMember> findByName(String name);
}
