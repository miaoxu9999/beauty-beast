package com.example.party.exception;


import com.example.party.enums.ResultEnum;

/**
 * @Author: miaoxu
 * @Description:  Registration的Exception类
 * @Date: Created in 2017/12/18 0018
 * @Modified By :
 */
public class RegistrationException extends RuntimeException{
    public RegistrationException(ResultEnum resultEnum) {
        super(resultEnum.getMsg());
        this.code = resultEnum.getCode();
    }

    private int code;//错误代码

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }
}
