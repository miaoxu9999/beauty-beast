package com.example.party.controller;

import com.example.party.enums.ResultEnum;
import com.example.party.exception.PartyMemberException;
import com.example.party.exception.RegistrationException;
import com.example.party.exception.RegistrationTempException;
import com.example.party.model.PartyMember;
import com.example.party.model.Registration;
import com.example.party.model.RegistrationTemp;
import com.example.party.model.Result;
import com.example.party.repository.PartyMemberRepository;
import com.example.party.repository.RegistrationRepository;
import com.example.party.repository.RegistrationTempRepository;
import com.example.party.util.ResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @Author: miaoxu
 * @Description:
 * @Date: Created in 2017/12/15 0015
 * @Modified By :
 */
@RestController
@RequestMapping(value = "/api")
public class RrgistrationTempController {
    @Autowired
    private RegistrationRepository registration_repository;

    @Autowired
    private PartyMemberRepository partyMemberRepository;

    @Autowired
    private RegistrationTempRepository registrationTempRepository;

    /*
    根据ID查询签到表
     */
    @GetMapping(value =  "/getAllAllPeopleRegistration/{id}")
    public Result getAllPeopleRegistration(@PathVariable("id") Integer id)
    {
        Registration registration = registration_repository.findByregistrationid(id).get(0);
        if (registration == null)
        {
            throw new RegistrationException(ResultEnum.NO_REGISTRATION);
        }
        List<RegistrationTemp> registrationTemp = registrationTempRepository.findByregistration(registration);
        if (registrationTemp == null || registrationTemp.size() <= 0)
        {
            throw new RegistrationTempException(ResultEnum.NO_MEMBER_REGISTRATION);
        }
        else if (registrationTemp.get(0).getRegistration() == null)
        {
            throw new RegistrationException(ResultEnum.NO_REGISTRATION);
        }
        //循环list，将member的信息置空（除了第一个）
        for (int i  =1; i < registrationTemp.size(); i++)
        {
            registrationTemp.get(i).setRegistration(null);
        }

        return  ResultUtil.success(registrationTemp);

    }

    /*
      根据memberid查找对应member的活动签到情况
     */
    @GetMapping(value = "/getRegistrationByMember/{id}")
    public Result getRegistrationByMember(@PathVariable("id") Integer memberid) {
        PartyMember partyMember = partyMemberRepository.findOne(memberid);

        if (partyMember == null) {
            throw new PartyMemberException(ResultEnum.NO_USER_FOUND);
        }
        List<RegistrationTemp> registrationTemp = registrationTempRepository.findBypartyMember(partyMember);
        if (registrationTemp == null || registrationTemp.size() <= 0)
        {
            throw new RegistrationTempException(ResultEnum.NO_MEMBER_REGISTRATION);
        }
        else if (registrationTemp.get(0).getPartyMember() == null)
        {
            throw new PartyMemberException(ResultEnum.NO_USER_FOUND);
        }
        //循环list，将member的信息置空（除了第一个）
        for (int i  =1; i < registrationTemp.size(); i++)
        {
            registrationTemp.get(i).setPartyMember(null);
        }
        return ResultUtil.success(registrationTemp);
    }
}
