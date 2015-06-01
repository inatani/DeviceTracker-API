/**
 * Created by sree on 5/3/15.
 */

var route = {
    userinfo : require('./controllers/userinfo'),
	deviceinfo : require('./controllers/deviceinfo'),
    loginuser : require('./controllers/loginuser'),
    loguser : require('./controllers/logreport')
};

module.exports = route;