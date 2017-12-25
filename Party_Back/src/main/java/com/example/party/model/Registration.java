package com.example.party.model;

import com.example.party.util.DataConvert;
import com.fasterxml.jackson.annotation.JsonBackReference;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * @Author: miaoxu
 * @Description: 签到表
 * @Date: Created in 2017/12/6 0006
 * @Modified By :
 */
@Entity
@Table(name = "Registration")
public class Registration {
    public void setRegistrationid(Integer registrationid) {
        this.registrationid = registrationid;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer registrationid;

    public void setActivityTime(Date activityTime) {
        this.activityTime = activityTime;
    }

    //    @ManyToMany(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
//    @JoinTable(joinColumns = {@JoinColumn(name = "memberid")}, inverseJoinColumns = {@JoinColumn(name = "registration_id")})
    @OneToMany(mappedBy = "registration", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonBackReference
    private List<RegistrationTemp> registration_temps;

    private String meetingName;//活动名称

    @DateTimeFormat
    private Date activityTime;//活动时间


    public Integer getRegistrationid() {
        return registrationid;
    }


    public List<RegistrationTemp> getRegistration_temps() {
        return registration_temps;
    }

    public void setRegistration_temps(List<RegistrationTemp> registration_temps) {
        this.registration_temps = registration_temps;
    }

    public String getMeetingName() {
        return meetingName;
    }

    public void setMeetingName(String meetingName) {
        this.meetingName = meetingName;
    }

    public Date getActivityTime() {
        return activityTime;
    }

    public void setActivityTime(String activityTime) {
//        System.out.println(activityTime);
        Date date = DataConvert.ConvertStringToDate(activityTime);
        System.out.println(date);
        this.activityTime = date;
    }
}
