var URI = require('urijs');
var Config = require('../Configuration/Addresses.js').Products;
var UrlHelper = require('../Helpers/UrlHelper.js');
var UrlService = {
  	GetProductsURL : function(){
		var ProductsURL = URI(Config.GET_ALL_PRODUCTS_URL);
		var cryptoLogin = UrlHelper(ProductsURL.toString());
		return cryptoLogin;
	}
}

module.exports = UrlService;
