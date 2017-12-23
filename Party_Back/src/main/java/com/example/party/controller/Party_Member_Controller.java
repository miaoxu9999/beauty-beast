package com.example.party.controller;

import com.example.party.enums.ResultEnum;
import com.example.party.exception.PartyMemberException;
import com.example.party.model.PartyMember;
import com.example.party.model.Result;
import com.example.party.repository.PartyMemberRepository;
import com.example.party.util.ResultUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @Author: miaoxu
 * @Description:
 * @Date: Created in 2017/12/4 0004
 * @Modified By :
 */
@RestController
@RequestMapping(value = "/api")
public class Party_Member_Controller {
    @Autowired
    private PartyMemberRepository partymemberrepository;

//    @Autowired
//    private MemberDetailRepository memberdetailrepository;


    /**
     * @Author: miaoxu
     * @param:
     * @Description: 查询所有党员的信息
     * @Date: 22:46 2017/12/18 0018
     **/
    @GetMapping(value = "/partymember")
    public Result party_memberList() throws Exception
    {
        List<PartyMember> partyMembers = partymemberrepository.findAll();
        if (partyMembers == null || partyMembers.size() < 1)
        {
            throw new PartyMemberException(ResultEnum.NO_USER_FOUND);
        }
        System.out.println(partyMembers);
       return ResultUtil.success( partyMembers);
    }

    /**
     * @Author: miaoxu
     * @param:
     * @Description: 查询特定党员的信息
     * @Date: 22:46 2017/12/18 0018
     **/
    @GetMapping(value = "/partymember/{id}")
    public Result getMemberById(@PathVariable("id") Integer memberid)
    {
        PartyMember partyMember = partymemberrepository.findOne(memberid);
        if (partyMember == null)
        {
            throw new PartyMemberException(ResultEnum.UNKNOWN_ERROR);
        }
        return ResultUtil.success(partyMember);
    }


    @PostMapping(value = "/partymember_bypage")
    public Result partyMembers_page(@RequestParam("page") int page, @RequestParam("size") int size) throws Exception
    {
        Page<PartyMember> partyMembers = partymemberrepository.findAll(new PageRequest(page, size));
        if (partyMembers == null || partyMembers.getSize() < page * size)
        {
            throw new PartyMemberException(ResultEnum.PAGE_TOO_LARGE);
        }
        return ResultUtil.success(partyMembers);
    }

    @PostMapping(value = "/partymember")
    public Result partyMemberAdd(PartyMember partyMember)
    {

        return ResultUtil.success(partymemberrepository.save(partyMember));

    }

    @DeleteMapping(value = "/partymember/{id}")
    public void deletePartyMember(@PathVariable("id") Integer memberid)
    {
        System.out.println(memberid);
        partymemberrepository.delete(memberid);
    }

    @PutMapping(value = "/partymember")
    public PartyMember PartyMemberUpdate(PartyMember partyMember)
    {
        return partymemberrepository.save(partyMember);
    }
}
