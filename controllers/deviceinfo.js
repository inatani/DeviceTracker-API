/**
 * Created by sree on 5/3/15.
 */

var restify = require('restify');

var deviceInfo = {
    getDeviceInfo : function (req, res, next) {
        deviceInfoModel.find(function (err, deviceInfo) {
            if (err) return;
            res.send(deviceInfo);
        });
        return next();
    },
    postDeviceInfo : function (req, res, next){
        var deviceInfoInputParam = {
            deviceName : req.params.deviceName,
            macID: req.params.macID,
            deviceID: req.params.deviceID,
            deviceLocation: req.params.deviceLocation,
            osVersion:req.params.osVersion,
            image:req.params.image
        };
		console.log("input Parameter" + JSON.stringify(deviceInfoInputParam));
        var saveDeviceInfo = new deviceInfoModel(deviceInfoInputParam);
        saveDeviceInfo.save(function (err, deviceInfoResult) {
            if (err) throw err;

            res.json(deviceInfoResult);
            res.send(201, saveDeviceInfo);

        });
        return next();
    }
};

module.exports = deviceInfo;