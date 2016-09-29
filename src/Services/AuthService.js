var URI = require('urijs');
var Config = require('../Configuration/Addresses.js').Auth;
import UrlHelper from '../Helpers/UrlHelper';
// var UrlHelper = require('../Helpers/UrlHelper.js');
var AuthService = {
	GetLoginURL: function(email, password){
		var LoginURL = URI(Config.LOGIN_URL);
		LoginURL.addQuery('email', email);
		LoginURL.addQuery('password', password);
		var cryptoLogin = new UrlHelper(LoginURL.toString()).url;
		return cryptoLogin;
	}	
}
module.exports = AuthService;