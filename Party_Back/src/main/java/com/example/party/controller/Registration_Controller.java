package com.example.party.controller;

import com.example.party.RegistrationType;
import com.example.party.model.Registration;
import com.example.party.model.RegistrationTemp;
import com.example.party.repository.RegistrationRepository;
import com.example.party.repository.RegistrationTempRepository;
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
public class Registration_Controller {
    @Autowired
    private RegistrationRepository registration_repository;

    @Autowired
    private RegistrationTempRepository registrationTempRepository;

    /*
    添加签到表
     */
    @PostMapping(value = "Registration")
    public Registration addRegistration(Registration registration)
    {
        return registration_repository.save(registration);
    }

    /*
    删除签到表,级联删除，会将registration_temp的相关内容删除
     */
    @DeleteMapping(value = "Registration/{id}")
    public void deleteRegistration(@PathVariable("id") Integer id)
    {
        registration_repository.delete(id);
    }

    /*
    查询签到表
     */
    @GetMapping(value = "Registration")
    public List<Registration>  registrationList()
    {
        return registration_repository.findAll();
    }

    @GetMapping(value =  "/getAllAllPeopleRegistration/{id}")
    public List<RegistrationTemp> getAllPeopleRegistration(@PathVariable("id") Integer id)
    {
        Registration registration = registration_repository.findByregistrationid(id).get(0);
        System.out.println(registration);
        return  registrationTempRepository.findByregistration(registration);

    }



}
