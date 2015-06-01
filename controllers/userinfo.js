/**
 * Created by sree on 5/3/15.
 */

var restify = require('restify');


var userInfo = {
    getUserInfo : function (req, res, next) {
        userInfoModel.find(function (err, userInfoResultData) {
            if (err) return;
            res.send(userInfoResultData);
        });
        return next();
    },
    postUserInfo : function (req, res, next){
        var userInfoInputParam = {
            userName : req.params.userName,
            emailID : req.params.emailID,
            phoneNumber : req.params.phoneNumber,
            password : req.params.password
        };
		//userData = JSON.stringify(userInfoInputParam);
		console.log("input Parameter" + JSON.stringify(userInfoInputParam));
        var saveUserInfo = new userInfoModel(userInfoInputParam);
        saveUserInfo.save(function (err, userInfoResultData) {
            if (err) {
                return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)))
            }
            else {
                res.json(userInfoResultData);
            }
            res.send(201, saveUserInfo);
			console.log("Result data" + JSON.stringify(userInfoResultData));
        });
        return next();
    }
};

module.exports = userInfo;