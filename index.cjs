const cryptKeyLibrary = require("./config/config.cjs");
const CryptoJS = require("crypto-js");


const ext = {

    encodeKeyLevel:(text, key) => {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            let keyCharCode = key.charCodeAt(i % key.length);
            result += String.fromCharCode(charCode + keyCharCode);
        }
        return result;
    },

      //aes 256 encryption
     encrypt:function(data){

        let crypt = ext.encodeKeyLevel(cryptKeyLibrary.getCryptKey(),cryptKeyLibrary.getCryptKey());
        
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), crypt).toString();
        return ciphertext;
     },
     //aes 256 decryption
     decrypt:function(data){

        try{
            let decrypt = ext.encodeKeyLevel(cryptKeyLibrary.getCryptKey(),cryptKeyLibrary.getCryptKey());

            var bytes = CryptoJS.AES.decrypt(data, decrypt);
            var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

            return decryptedData;
        }catch(exeption){
            return;
        }
        

      },

}


// Check for CommonJS environment
module.exports = ext;


