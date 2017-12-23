package com.example.party.util;

import com.example.party.PrivilegeType;
import com.example.party.RegistrationType;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import static com.example.party.RegistrationType.AbsentFromMeeting;

/**
 * @Author: miaoxu
 * @Description:
 * @Date: Created in 2017/12/8 0008
 * @Modified By :
 */
public  class DataConvert {
    /**
    * @Author: miaoxu
    * @param: String s
    * @Description: 将字符串转化为Date类型
    * @Date: 11:36 2017/12/8 0008
    **/
    public static Date ConvertStringToDate(String s)
    {
        DateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
        Date date = new Date();
        try
        {
            date = format1.parse(s);
        }
        catch (Exception e)
        {

        }
        return date;
    }

    /**
    * @Author: miaoxu
    * @param: PrivilegeType privilegeType
    * @Description: 将PrivilegeType转化为Integer
    * @Date: 14:23 2017/12/8 0008
    **/
    public static Integer ConvertPrivilegeTypeToInteger(PrivilegeType privilegeType)
    {
        switch (privilegeType)
        {
            case SuperUser:
                return 0;
            case Secretary:
                return 1;
            case Committee:
                return 2;
            default:
                return 3;
        }
    }

    /**
     * @Author: miaoxu
     * @param: PrivilegeType privilegeType
     * @Description: 将Integer转化为PrivilegeType
     * @Date: 14:23 2017/12/8 0008
     **/
    public static PrivilegeType ConvertIntegerToPrivilegeType(int privilegeType)
    {
        switch (privilegeType)
        {
            case 0:
                return PrivilegeType.SuperUser;
            case 1:
                return PrivilegeType.Secretary;
            case 2:
                return PrivilegeType.Committee;
            default:
                return PrivilegeType.Ordinary;
        }
    }

    /**
     * @Author: miaoxu
     * @param: PrivilegeType privilegeType
     * @Description: 将registrationType转化为Integer
     * @Date: 14:23 2017/12/8 0008
     **/
    public static Integer ConvertRegistrationTypeToInteger(RegistrationType registrationType)
    {
        switch (registrationType)
        {
            case AbsentFromMeeting: //无故不来
                return 0;
            case Late://迟到
                return 1;
            case AskForLeave://请假
                return 2;
            default:
                return 3;
        }
    }

    public static RegistrationType IntegerToRegistrationType(int registrationType)
    {
        switch (registrationType)
        {
            case 0:
                return RegistrationType.AbsentFromMeeting;
            case 1:
                return RegistrationType.Late;
            case 2:
                return RegistrationType.AskForLeave;
            default:
                return RegistrationType.OnTime;
        }
    }
}
