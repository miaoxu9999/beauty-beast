package com.example.party.controller;

import com.example.party.model.PartyMember;
import com.example.party.repository.PartyMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @Author: miaoxu
 * @Description: 账户控制
 * @Date: Created in 2017/12/11 0011
 * @Modified By :
 */
@RestController
public class AccountController {
    @Autowired
    private PartyMemberRepository party_member_repository;

    @PostMapping(value =  "/login")
    public boolean login(@RequestParam("account") String account, @RequestParam("pass") String pass)
    {
        List<PartyMember> list = party_member_repository.findBystudentIDAndPassword(account, pass);
        System.out.println(list.toString());
        return (list.size() > 0);
    }

}
