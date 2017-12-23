package com.example.party.handle;

import com.example.party.exception.PartyMemberException;
import com.example.party.model.Result;
import com.example.party.util.ResultUtil;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.logging.Logger;

/**
 * @Author: miaoxu
 * @Description: 处理异常的类
 * @Date: Created in 2017/12/18 0018
 * @Modified By :
 */
@ControllerAdvice
public class ExceptionHandle {
    @ExceptionHandler(value = Exception.class)
    @ResponseBody
    public Result handle(Exception e)
    {
        if (e instanceof PartyMemberException)
        {
            return ResultUtil.error(((PartyMemberException) e).getCode(), e.getMessage());
        }

        return ResultUtil.error(100, "异常");
    }
}
