package com.example.party.util;

import com.example.party.model.Result;

/**
 * @Author: miaoxu
 * @Description:
 * @Date: Created in 2017/12/18 0018
 * @Modified By :
 */
public class ResultUtil {
    /**
     * @Author: miaoxu
     * @param: data
     * @Description: 返回成功的result
     * @Date: 11:34 2017/12/18 0018
     **/
    public static Result success(Object data)
    {
        Result result = new Result();
        result.setCode(0);
        result.setMsg("成功");
//        System.out.printf(data.toString());
        result.setData(data);
        return result;
    }


    /**
     * @Author: miaoxu
     * @param:
     * @Description: 返回无结果的成功信息
     * @Date: 11:36 2017/12/18 0018
     **/
    /**
     * @Author: zzy
     * @param:
     * @Description: 返回无结果的成功信息
     * @Date: 14:06 2017/12/24 0018
     **/
    public static Result success()
    {
        Result result = new Result();
        result.setCode(0);
        result.setMsg("成功");
        return result;
    }

    /**
     * @Author: miaoxu
     * @param: code 错误码
    * @param: msg 错误信息
     * @Description: 返回错误信息
     * @Date: 11:36 2017/ 12/18 0018
     **/
    public static Result error(Integer code, String msg)
    {
        Result result = new Result();
        result.setCode(code);
        result.setMsg(msg);
        return result;
    }
}
