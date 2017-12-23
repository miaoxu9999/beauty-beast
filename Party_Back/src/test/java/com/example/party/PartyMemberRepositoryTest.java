package com.example.party;

import com.example.party.repository.PartyMemberRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * @Author: miaoxu
 * @Description:
 * @Date: Created in 2017/12/18 0018
 * @Modified By :
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class PartyMemberRepositoryTest {
    @Autowired
    private PartyMemberRepository partyMemberRepository;

    @Test
    public void deleteByIdtest()
    {

    }
}
