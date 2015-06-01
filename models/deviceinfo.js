/**
 * Created by sree on 5/3/15.
 */
var mongoose = require('mongoose');

var deviceInfoSchema = new mongoose.Schema({
    deviceName:{
        type: String,
        required: true
    },
    macID:{
        type:String,
        required: true,
	uppercase : true
    },
	image:{
		type:String,
		require:true
	},
    deviceLocation:{
        type: String,
        required: true
    },
	deviceID:{
        type: String,
        required: true,
	uppercase: true
    },
    osVersion:{
        type:String,
        required: true
    }
});

deviceInfoModel = mongoose.model('deviceinfo', deviceInfoSchema);

module.exports = deviceInfoModel;
