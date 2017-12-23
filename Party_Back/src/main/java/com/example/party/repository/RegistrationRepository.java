package com.example.party.repository;

import com.example.party.Allinterface.AllPeopleRegistration;
import com.example.party.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

import com.example.party.model.PartyMember;

/**
 * @Author: miaoxu
 * @Description:
 * @Date: Created in 2017/12/8 0008
 * @Modified By :
 */
public interface RegistrationRepository extends JpaRepository<Registration, Integer>{
    /*
    根据活动id查询所有参加活动人员的签到情况
     */
//    @Modifying
//    @Query("SELECT * from PartyMember, Registration, RegistrationTemp where  RegistrationTemp.registration_registration_id = ?1 and registration_temp.party_member_memberid = party_member.memberid and registration.registration_id = registration_temp.registration_registration_id")
//    @Query("SELECT  m.memberid FROM  PartyMember m , Registration r, RegistrationTemp t where  m.memberid = t.partyMember.memberid and  r.registrationid = t.registration.memberid and r.registrationid = ?1")
//    public List<AllPeopleRegistration> findByregistrationid(Integer registrationid);

    public List<Registration> findByregistrationid(Integer id);


}
