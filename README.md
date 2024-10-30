# gencrypt

Introducing our JavaScript Cryptography Library – a high-performance, all-in-one solution for secure data encryption and decryption. Featuring robust private-public key encryption, it ensures top-tier security for all your cryptographic needs. This versatile library is ideal for high-quality data protection in AI projects and financial organizations, safeguarding sensitive information while allowing seamless integration across multiple platforms. Everything you need for advanced encryption is packed into one powerful package, providing maximum security and ease of use. Perfect for developers seeking to implement cutting-edge cryptographic solutions, our library is your go-to tool for protecting data integrity and confidentiality in today's digital landscape.

### Update added

easy update


### Usage

first set your key inside gencrypt module -> config/config.js folder

you will find this line or you can search in your IDE by name "cryptKey" to find file
const cryptKey = "new key"; //change this line
const cryptKey = "your key"; //to this




To encrypt js object
const gencrypt = require('gencrypt');

 console.log(gencrypt.encrypt({
     'keycode':'FCE',
    'firstname':'abc',
     'lastname':'234'
 }))

 to decrypt encrypted message use

let encryptedString = 'U2FsdGVkX1/j16TTXF86LIDKP/ipy3yU8MDYggf+17FLPTKY+SB/EsnEeldtm1TvrhnYMRb0vNS4ZSzSNYwoRLIHOVuuWtMCPSdBBRMp2rE=';

 console.log(gencrypt.decrypt(encryptedString));

//{ keycode: 'FCE', firstname: 'abc', lastname: '234' }



## Node.js (Install)

Requirements:

- Node.js
- npm (Node.js package manager)

```bash
npm install gencrypt
```



ES6 import for typical API call signing use case:

```javascript
import {encrypt, decrypt} from 'gencrypt';

let obj = encrypt({
    name:name
});

let decryptobj = decrypt('incoming string');

or
 
const gencrypt = require('gencrypt');
gencrypt.crypt({
    name:name
})

gencrypt.decrypt("incoming encrypted string")
