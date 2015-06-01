/**
 * Created by sree on 5/7/15.
 */
var User = require('../models/userinfo');

var login = {
    postLoginUser : function(req, res, next){
        var deviceInfoInputParam = {
            emailID : req.params.emailID,
            password : req.params.password
        };
	//console.log("Total Result"+req.params.emailID);
        console.log("input Parameter" + JSON.stringify(deviceInfoInputParam));
        User.findOne({emailID : deviceInfoInputParam.emailID},function(err, user){
            if(err) throw err;
            user.comparePassword(deviceInfoInputParam.password, function(err, isMatch){
                if (err) throw err;
                console.log('Password : '+ isMatch);
                if(isMatch)
                    res.send(200, {'Result':'success'});
                else
                    res.send(200,{'Result':'failed'});
            });
        });
        return next();
    }
};

module.exports = login;
