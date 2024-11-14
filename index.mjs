import cryptKeyLibrary from "./config/config.cjs";
import CryptoJS from "crypto-js";

    const encodeKeyLevel = (text, key) => {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            let keyCharCode = key.charCodeAt(i % key.length);
            result += String.fromCharCode(charCode + keyCharCode);
        }
        return result;
    }

      //aes 256 encryption
      export const encrypt = (data) => {

        let crypt = encodeKeyLevel(cryptKeyLibrary.getCryptKey(),cryptKeyLibrary.getCryptKey());
        
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), crypt).toString();
        return ciphertext;
     }
     //aes 256 decryption
     export const decrypt = (data) => {

        let decrypt = encodeKeyLevel(cryptKeyLibrary.getCryptKey(),cryptKeyLibrary.getCryptKey());

        var bytes = CryptoJS.AES.decrypt(data, decrypt);
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

         return decryptedData;

      }

      if (typeof module === 'object' && module.exports) {
        // CommonJS
        module.exports = { encrypt,decrypt };
      }





