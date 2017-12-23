package com.example.party;

/**
 * @Author: miaoxu
 * @Description:
 * @Date: Created in 2017/12/7 0007
 * @Modified By :
 */
public enum PrivilegeType {
    SuperUser(0),
    Secretary(1),//书记
    Committee(2),//委员
    Ordinary(3);//普通党员或在积极分子

    private int type;

    public void setType(int type) {
        this.type = type;
    }

     PrivilegeType(int type)
    {
        this.type = type;
    }


}
