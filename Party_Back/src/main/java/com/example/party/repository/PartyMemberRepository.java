package com.example.party.repository;

import com.example.party.PrivilegeType;
import com.example.party.model.PartyMember;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

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
    //通过姓名,权限，学号模糊查询
    @Query("from PartyMember as s where (" +
            "s.name like %?1% or ?1 =null)  or" +
            "(s.privilegeType like %?1%  or ?1 = null) or " +
            "(s.studentID like %?1%  or ?1 = null)")
    public Page<PartyMember> findBynameAndprivilegeTypeAndstudentIDLike(String condation, Pageable pageable);


}
