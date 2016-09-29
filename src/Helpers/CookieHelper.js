var CookieManager = require('react-navice-cookie');

var CookieHelper = {
	addCookie: function(){
		CookieManager.set({
  			name: 'myCookie',
  			value: 'myValue',
			  domain: 'some domain',
			  origin: 'some origin',
			  path: '/',
			  version: '1',
			  expiration: '2015-05-30T12:30:00.00-05:00'
		}, (err, res) => {
  			console.log('cookie set!');
  			console.log(err);
  			console.log(res);
		});
	},
	getCookie: function(){

	}
}