var SHA256 = require('sha256');
var CryptoJS = require('crypto-js');
import Base64HexHelper from './Base64HexHelper';


export default class HashHelper {
    constructor(query, secret){
        let toHash = query  + secret;
		let sha256 = SHA256(toHash);
		let test = CryptoJS.SHA256(toHash);
		let base64HashValue = new Base64HexHelper(sha256).hash;
		return {
            hash: base64HashValue
        }
    }
}