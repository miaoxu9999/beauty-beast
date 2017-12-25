package com.example.party.model;

import com.example.party.RegistrationType;
import com.example.party.util.DataConvert;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.persistence.*;
import javax.xml.crypto.Data;

/**
 * @Author: miaoxu
 * @Description:
 * @Date: Created in 2017/12/7 0007
 * @Modified By :
 */
@Entity
@Table(name = "RegistrationTemp")
public class RegistrationTemp {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne(optional = false)
//    @JsonIgnore
    private PartyMember partyMember;


    @ManyToOne(optional = false)
//    @JsonIgnore
    private Registration registration;

    private RegistrationType registrationType; //签到状态

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public PartyMember getPartyMember() {
        return partyMember;
    }

    public void setPartyMember(PartyMember partyMember) {
        this.partyMember = partyMember;
    }

    public Registration getRegistration() {
        return registration;
    }

    public void setRegistration(Registration registration) {
        this.registration = registration;
    }

    public Integer getRegistrationType() {
        return DataConvert.ConvertRegistrationTypeToInteger(registrationType);
    }

    public void setRegistrationType(RegistrationType registrationType) {
        this.registrationType = registrationType;
    }
}
