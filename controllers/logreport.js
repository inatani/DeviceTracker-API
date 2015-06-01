/**
 * Created by sree on 5/8/15.
 */
var restify = require('restify');
var Log = require('../models/logreport')
var userLog = {
    postUserLog : function(req, res, next){
        var currentDate = new Date().toISOString();
        console.log(currentDate);
        var userLogInputParam = {
            emailID : req.params.emailID,
            macID : req.params.macID,
            startTime : currentDate
        };
        console.log("input Parameter" + JSON.stringify(userLogInputParam));
        var saveUserLog = new userLogModel(userLogInputParam);
        saveUserLog.save(function (err, userLogResult) {
            if (err) throw err;
            console.log("Result data" + JSON.stringify(saveUserLog));
            res.send(200, {"result": "success"});
        });
        return next();
    },
    getUserLog : function(req, res, next){
        userLogModel.find(function (err, userLogResultData) {
            if (err) return;
            res.send(userLogResultData);
        });
        return next();
    },
    updateUserLog : function(req,res, next){
        var currentTime = new Date().toISOString();
        //var currentTime = "1010-01-11T20:05:55.353Z"
        var updateUserLogInputParam = {
            emailID : req.params.emailID,
            startTime : req.params.startTime
        };

        Log.findOneAndUpdate(updateUserLogInputParam,{ $set: { actualEndTime: currentTime }}, {upsert:true},function(err, result){
            if (err) throw err;
//            console.log(result);
            res.send(200, {"result" : "success"});
        });
        return next();
    }
};

module.exports = userLog;
