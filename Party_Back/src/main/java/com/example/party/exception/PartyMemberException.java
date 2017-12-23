package com.example.party.exception;

import com.example.party.enums.ResultEnum;

/**
 * @Author: miaoxu
 * @Description: PartyMember的Exception类
 * @Date: Created in 2017/12/18 0018
 * @Modified By :
 */
public class PartyMemberException extends RuntimeException {
    private int code;//错误代码

    public PartyMemberException(ResultEnum result)
    {
        super(result.getMsg());
        this.code = result.getCode();
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }
}
