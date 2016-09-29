var UrlService = require('../Services/UrlService');


export default class ProductService {
	constructor(){
		
	}
	async getProducts() {
		let ProductsUrl = UrlService.GetProductsURL();
		let result = await fetch(ProductsUrl,
		{
			method: 'GET',
		    headers: {
			 'Accept': 'text/html',
		     'Content-Type': 'text/html'
			}
		});
		var kot = 'asd';
		return result;		
	}
}