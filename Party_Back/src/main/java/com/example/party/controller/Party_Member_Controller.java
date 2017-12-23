package com.example.party.controller;

import com.example.party.model.PartyMember;
import com.example.party.repository.PartyMemberRepository;
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
public class Party_Member_Controller {
    @Autowired
    private PartyMemberRepository partymemberrepository;

//    @Autowired
//    private MemberDetailRepository memberdetailrepository;

    @GetMapping(value = "partymember")
    public List<PartyMember> party_memberList()
    {
        List<PartyMember> partyMembers = partymemberrepository.findAll();
        for (PartyMember p: partyMembers)
        {
//            System.out.println(p.getName());
        }
       return partymemberrepository.findAll();
    }



    @PostMapping(value = "/partymember_bypage")
    public Page<PartyMember> partyMembers_page(@RequestParam("page") int page, @RequestParam("size") int size)
    {
        return partymemberrepository.findAll(new PageRequest(page, size));
    }

    @PostMapping(value = "/partymember")
    public PartyMember partyMemberAdd(PartyMember partyMember)
    {
//        System.out.println(partyMember.getName());

//        System.out.println(partyMember.);
        return partymemberrepository.save(partyMember);

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
