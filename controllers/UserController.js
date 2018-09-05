//1, 引入链接数据库模块
var Wechat = require('../Dao/Wechat');
// 引入腾讯云上传图片模块
var COS = require('cos-nodejs-sdk-v5');
var cos = new COS({
    // 必选参数
    SecretId: "AKIDmQvELKHi7KfqfMJ7jFcopeHn9NQIgTms",
    SecretKey: "8ATedQ3VlpiQ6jIk4GKI8rtV4Sfg7OVQ",
});

//用户收藏删除
exports.deCollect = function (req, res)  {
    var id=req.body.id;
    var result;
    //链接数据库
    collect = new Wechat();
    collect.init();
    //取出数据
    var sql = "delete from collect where collect_id="+id;
    if(!collect.delete(sql)){
        result=1;
    }else{
        result=0;
    }
    var response={
        result:result
    }

    res.end(JSON.stringify(response));
};

//用户查询
exports.user = function (req, res)  {
    //链接数据库
    users = new Wechat();
    users.init();
    //取出数据
    var sql = "select * from users ";
    users.queryAll(sql, function (users) {
        var response={
            users:users
        }

        res.end(JSON.stringify(response));
    });
};

//用户删除
exports.deUser = function (req, res)  {
    var id=req.body.id;
    var result;
    //链接数据库
    songList = new Wechat();
    songList.init();
    //取出数据
    var sql = "delete from users where user_id="+id;
    if(!songList.delete(sql)){
        result=1;
    }else{
        result=0;
    }
    var response={
        result:result
    }

    res.end(JSON.stringify(response));
};