var URI = require('urijs');
var Moment = require('moment');
var Config = require('../Configuration/Addresses.js').Auth;
import HashHelper from './HashHelper';

export default class UrlHelper{
	constructor(url){
		let URL = URI(url);
		let protocol = URL.protocol();
		let host = URL.host();
		let path = URL.path();
		let queries = URL.query().split('&');

		let signedUrl = URI(protocol + '://' + host + path);

		let newQueryToHash = 'authClientId' + '=' + Config.AUTH_CLIENT_ID;

		if (queries[0] != ""){
				queries.map(function(query){
					var keyValue = query.split('=');
					newQueryToHash = newQueryToHash + "&"+ keyValue[0] + '=' + keyValue[1];
				});
		}

		let dateTimeToHash = getDateTime();
		newQueryToHash = newQueryToHash + '&authDateTime' + '=' + dateTimeToHash;

		let hash = new HashHelper(newQueryToHash, Config.SECRET_KEY).hash;


		signedUrl.addQuery('authClientId', Config.AUTH_CLIENT_ID);
		queries.map(function(query){
			var keyValue = query.split('=');
			signedUrl.addQuery(keyValue[0], encodeURIComponent(keyValue[1]));
		});

		signedUrl.addQuery('authDateTime', dateTimeToHash);

		signedUrl.addQuery('authHash', hash + '\n'); // '\n' - szalenie ważne !!!!!!

		return {
			url: signedUrl.toString()
		}
	}
}

let getDateTime = function() {
	var dateTime = Moment.utc().format('YYYY-MM-DDTHH:mm:SS.SSS').toString() + 'Z';  //Moment.utc().format();
	return dateTime;
}