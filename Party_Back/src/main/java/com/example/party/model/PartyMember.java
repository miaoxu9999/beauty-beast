package com.example.party.model;

import com.example.party.PrivilegeType;
import com.example.party.util.DataConvert;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * @Author: miaoxu
 * @Description:
 * @Date: Created in 2017/12/4 0004
 * @Modified By :
 */
@Entity
@Table(name = "PartyMember")
public class PartyMember {
    public Integer getMemberid() {
        return memberid;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer memberid;


    private String studentID;//账号

    private String password; //密码

    @DateTimeFormat
    private Date fzdx; //称为 发展对象的日期

    @DateTimeFormat
    private Date rdrq; // 入党日期

    private String name;


    private PrivilegeType privilegeType;

    @OneToMany(mappedBy = "partyMember")
    @JsonBackReference
    private List<RegistrationTemp> registrationtemps;

    @DateTimeFormat
    private Date tjsq;//提交入党申请书的日期

    @DateTimeFormat
    private Date rdjjfz;//称为 入党积极分子的日期

    public void setMemberid(Integer memberid) {
        this.memberid = memberid;
    }

    public Date getTjsq() {
        return tjsq;
    }

    public void setTjsq(Date tjsq) {
        this.tjsq = tjsq;
    }

    public Date getRdjjfz() {
        return rdjjfz;
    }

    public void setRdjjfz(Date rdjjfz) {
        this.rdjjfz = rdjjfz;
    }

    public Date getFzdx() {
        return fzdx;
    }

    public void setFzdx(Date fzdx) {
        this.fzdx = fzdx;
    }

    public Date getRdrq() {
        return rdrq;
    }

    public void setRdrq(Date rdrq) {
        this.rdrq = rdrq;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }





    public String getStudentID() {
        return studentID;
    }

    public void setStudentID(String studentID) {
        this.studentID = studentID;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public int getPrivilegeType() {
        return DataConvert.ConvertPrivilegeTypeToInteger(privilegeType);
    }

    public void setPrivilegeType(Integer privilegeType) {
        this.privilegeType = DataConvert.ConvertIntegerToPrivilegeType(privilegeType);
    }

    public List<RegistrationTemp> getRegistrationtemps() {
        return registrationtemps;
    }

    public void setRegistrationtemps(List<RegistrationTemp> registrationtemps) {
        this.registrationtemps = registrationtemps;
    }




}
