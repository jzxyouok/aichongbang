let {
    AddSpoilTheMain, removeSpoilTheMain, findSpoilTheMain, updateSpoilTheMain,getSpoilTheMainByPage
} = require("../dao/petDao.js")

//新增宠主
module.exports.AddSpoilTheMain = async function (parm) {
    let data = await AddSpoilTheMain(parm); 
    if(data){
        return data; 
    }else {
        return false;
    }
}

//删除宠主
module.exports.removeSpoilTheMain = async (info) => {
    let data = await removeSpoilTheMain(info);
    if(data.ok>0){
        return true;
    }else{
        return false;
    }
}

//查询宠主
module.exports.findSpoilTheMain = async function (info) {
    return await findSpoilTheMain(info);
}

//修改
module.exports.updateSpoilTheMain=async function (info) { 
    let data = await updateSpoilTheMain(info);
    if(data){
        return data;
    }else{
        return false;
    }
 }