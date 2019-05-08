let {
    addpet, removepet, findpet, updatepet,getPetByPage,PetPictures
} = require("../dao/QueryThePet-Dao")

//新增宠物
module.exports.addpet = async function (parm) {
    let data = await addpet(parm); 
    if(data){
        return data; 
    }else {
        return false;
    }
}

//删除宠物
module.exports.removepet = async (info) => {
    let data = await removepet(info);
    if(data.ok>0){
        return true;
    }else{
        return false;
    }
}

//查询宠物
module.exports.findpet = async function (info) {
    return await findpet(info);
}

//修改
module.exports.updatepet=async function (info) { 
    let data = await updatepet(info);
    if(data){
        return data;
    }else{
        return false;
    }
 }
//新增图片
 module.exports.PetPictures = async function (parm) {
    let data = await PetPictures(parm); 
    if(data){
        return data; 
    }else {
        return false;
    }
}

//通过页面获取信息

module.exports.getPetByPage=async function (info) {
    return await getPetByPage(info)
 }