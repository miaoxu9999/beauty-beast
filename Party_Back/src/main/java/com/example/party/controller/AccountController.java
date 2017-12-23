package com.example.party.controller;

import com.example.party.enums.ResultEnum;
import com.example.party.exception.PartyMemberException;
import com.example.party.model.PartyMember;
import com.example.party.model.Result;
import com.example.party.repository.PartyMemberRepository;
import com.example.party.util.ResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @Author: miaoxu
 * @Description: 账户控制
 * @Date: Created in 2017/12/11 0011
 * @Modified By :mx
 * 加入异常处理，并统一返回格式
 */
@RestController
@RequestMapping(value = "/api")
public class AccountController {
    @Autowired
    private PartyMemberRepository party_member_repository;

    @PostMapping(value =  "/login")
    public Result login(@RequestParam("account") String account, @RequestParam("pass") String pass) throws Exception
    {
        List<PartyMember> list = party_member_repository.findBystudentIDAndPassword(account, pass);
        if (list == null || list.size() <= 0)
        {
            throw new PartyMemberException(ResultEnum.NO_USER_FOUND);
        }
        return ResultUtil.success(list.get(0));
    }

}
