var AuthService = require('../Services/AuthService.js');

var LoginService = {
	login: function(email, password){
		var LoginUrl = AuthService.GetLoginURL(email, password);
		var loginPromise = fetch(LoginUrl)
		  //  .then(function(response) {
			// 	 console.log(response);
		  //  }
		//  );
			 return loginPromise;
	}
}
module.exports = LoginService;
