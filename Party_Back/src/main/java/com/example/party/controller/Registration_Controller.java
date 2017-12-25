package com.example.party.controller;

import com.example.party.RegistrationType;
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
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @Author: miaoxu
 * @Description:
 * @Date: Created in 2017/12/8 0008
 * @Modified By :
 */
@RestController
@RequestMapping(value = "/api")
public class Registration_Controller {
    @Autowired
    private RegistrationRepository registration_repository;

    @Autowired
    private PartyMemberRepository partyMemberRepository;

    @Autowired
    private RegistrationTempRepository registrationTempRepository;

    /*
    添加签到表
     */
    @PostMapping(value = "/Registration")
    public Result addRegistration(@RequestBody Registration registration)
    {
        return ResultUtil.success(registration_repository.save(registration));
    }

    /*
    更新签到表
     */
    @PutMapping(value = "/Registration")
    public Result updateRegistration(@RequestBody Registration registration)
    {
        return ResultUtil.success(registration_repository.save(registration));
    }

    /*
    删除签到表,级联删除，会将registration_temp的相关内容删除
     */
    @DeleteMapping(value = "/Registration/{id}")
    public Result deleteRegistration(@PathVariable("id") Integer id)
    {
        registration_repository.delete(id);
        return ResultUtil.success();
    }

    /*
    查询签到表
     */
    @GetMapping(value = "/Registration")
    public Result registrationList()
    {
        return ResultUtil.success(registration_repository.findAll());
    }

    /*
    根据id查询签到表
     */
    @GetMapping(value = "/Registration/{id}")
    public Result getRegistrationByi(@PathVariable("id") Integer id)
    {
        Registration registration = registration_repository.findOne(id);
        if (registration == null)
        {
            throw new RegistrationException(ResultEnum.NO_REGISTRATION);
        }
        return ResultUtil.success(registration);
    }





}
