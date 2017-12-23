package com.example.party.exception;


/**
 * @Author: miaoxu
 * @Description:  Registration的Exception类
 * @Date: Created in 2017/12/18 0018
 * @Modified By :
 */
public class RegistrationException extends RuntimeException{
    public RegistrationException(int code, String mes) {
        super(mes);
        this.code = code;
    }

    private int code;//错误代码

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }
}
