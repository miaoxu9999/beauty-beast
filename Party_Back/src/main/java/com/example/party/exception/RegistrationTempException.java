package com.example.party.exception;

import com.example.party.enums.ResultEnum;

public class RegistrationTempException extends RuntimeException{
    private int code;//错误代码

    public RegistrationTempException( ResultEnum resultEnum) {
        super(resultEnum.getMsg());
        this.code = resultEnum.getCode();
    }

    public int getCode() {
        return code;
    }
    public void setCode(int code) {
        this.code = code;
    }
}
