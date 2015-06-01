/**
 * Created by sree on 5/3/15.
 */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;

var userInfoSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
	uppercase: true
    },
	emailID:{
        type: String,
        required: true,
	lowercase:true
    },
    phoneNumber:{
        type:String,
        required: true
    },
	password:{
		type:String,
		require:true
	}
});
userInfoSchema.pre('save',function(next){
   var user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR,function(err, salt){
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash){
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

userInfoSchema.methods.comparePassword = function(userPassword, cb){
    bcrypt.compare(userPassword, this.password, function(err, isMatch){
        if(err) return cb(err);
        cb(null, isMatch);
    });
};

userInfoModel = mongoose.model('userInfo', userInfoSchema);

module.exports = userInfoModel;
