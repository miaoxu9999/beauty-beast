package com.example.party.repository;

import com.example.party.model.PartyMember;
import com.example.party.model.Registration;
import com.example.party.model.RegistrationTemp;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @Author: miaoxu
 * @Description:
 * @Date: Created in 2017/12/15 0015
 * @Modified By :
 */
public interface RegistrationTempRepository extends JpaRepository<RegistrationTemp, Integer> {
    public List<RegistrationTemp> findByregistration(Registration registration);

    /*
      根据memberid查找对应member的活动签到情况
     */
    public List<RegistrationTemp> findBypartyMember(PartyMember partyMember);
}
