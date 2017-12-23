package com.example.party.model;

/**
 * @Author: miaoxu
 * @Description: 返回结果对象
 * @Date: Created in 2017/12/18 0018
 * @Modified By :
 */
public class Result<T> {
    /*
    错误码
     */
    private int code;

    /*
    msg 信息
     */
    private String msg;

    /*
    data 数据
     */
    T data;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
