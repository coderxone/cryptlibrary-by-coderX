# gencrypt

**gencrypt** is a high-performance JavaScript Cryptography Library designed for secure data encryption and decryption. Featuring robust public-private key encryption, this library offers top-tier security for various cryptographic needs, making it an excellent choice for developers in AI, financial services, or any project requiring advanced data protection. 

With **gencrypt**, you have everything you need to ensure data integrity and confidentiality, all within an easy-to-integrate package that works seamlessly across multiple platforms.

### Key Features
- High-performance encryption and decryption
- Public-private key cryptography for maximum security
- Suitable for AI and financial applications
- Supports both ES6 and CommonJS

For comprehensive documentation, please refer to the [GitHub Repository](https://github.com/coderxone/cryptlibrary-by-coderX).

## Installation

To get started, install **gencrypt** using npm:

```bash
npm install gencrypt

Configuration
To configure your encryption key:

1. Open config/config.js in the gencrypt module. 
2. Locate the line: const cryptKey = "new key";
3. Change "new key" to your desired key.

# Example:
const cryptKey = "your key"; // Set your encryption key here

#Usage
ES6 / ESM
Import and use encrypt and decrypt functions with ES6 syntax:

import { encrypt, decrypt } from 'gencrypt';

// Encrypt a JavaScript object
let encryptedObject = encrypt({
    name: 'John Doe'
});

// Decrypt an encrypted string
let decryptedObject = decrypt('your_encrypted_string');

#CommonJS
#For CommonJS environments:

If you encounter an error with require, remove "type": "module" from package.json in the package folder.

Then, require the module as shown below:

const gencrypt = require('gencrypt');

// Encrypt an object
console.log(gencrypt.encrypt({
    keycode: 'FCE',
    firstname: 'abc',
    lastname: '234'
}));

// Decrypt an encrypted message
let encryptedString = 'U2FsdGVkX1/j16TTXF86LIDKP/ipy3yU8MDYggf+17FLPTKY+SB/EsnEeldtm1TvrhnYMRb0vNS4ZSzSNYwoRLIHOVuuWtMCPSdBBRMp2rE=';
console.log(gencrypt.decrypt(encryptedString));
// Expected output: { keycode: 'FCE', firstname: 'abc', lastname: '234' }

#Node.js Requirements
* Node.js
* npm (Node Package Manager)
#Additional Usage Example for API Call Signing (ES6)

import { encrypt, decrypt } from 'gencrypt';

let encryptedData = encrypt({
    name: 'John Doe'
});

let decryptedData = decrypt('your_encrypted_string');

#For CommonJS environments:
const gencrypt = require('gencrypt');

gencrypt.encrypt({
    name: 'John Doe'
});

gencrypt.decrypt("your_encrypted_string");
