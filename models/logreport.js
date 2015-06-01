/**
 * Created by sree on 5/7/15.
 */
var mongoose = require('mongoose');

var userLog = new mongoose.Schema({
    emailID:{
        type: String,
        required: true,
        lowercase : true,
        trim : true
    },
    macID:{
        type: String,
        required: true,
        uppercase : true
    },
    startTime:{
        type:Date
    },
    expectedEndTime:{
        type:Date
    },
    actualEndTime:{
        type:Date,
        default : "Mon Jan 01 1900 00:00:00 GMT+0530 (IST)"
    }
});

userLogModel = mongoose.model('userLog', userLog);

module.exports = userLogModel;