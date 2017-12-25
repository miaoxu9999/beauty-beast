package com.example.party.enums;

/**
 * @Author: miaoxu
 * @Description:
 * @Date: Created in 2017/12/18 0018
 * @Modified By :
 */
public enum ResultEnum {
    UNKNOWN_ERROR(-1, "未知错误"),
    SUCCESS(1, "成功"),
    NO_USER_FOUND(2, "您的用户名或账户输入有误，请仔细查验您的账户和密码"),
    PAGE_TOO_LARGE(3, "分页数目或者错误"),
    NO_REGISTRATION(4, "没有对应的签到表"),
    NO_MEMBER_REGISTRATION(5, "当前查询用户没有参加任何活动"),
    ;
    private int code;
    private String msg;

    public int getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }

     ResultEnum(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

}
