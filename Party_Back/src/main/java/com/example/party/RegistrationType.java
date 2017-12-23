package com.example.party;

import sun.misc.GC;

/**
 * @Author: miaoxu
 * @Description:
 * @Date: Created in 2017/12/7 0007
 * @Modified By :
 */
public enum RegistrationType {
    AbsentFromMeeting,//无故不来
    Late, //迟到
    AskForLeave,//请假
    OnTime, //正常

//    switch (registrationType)
//    {
//        case AbsentFromMeeting: //无故不来
//            return 0;
//        case Late://迟到
//            return 1;
//        case AskForLeave://请假
//            return 2;
//        default:
//            return 3;
//    }
}
