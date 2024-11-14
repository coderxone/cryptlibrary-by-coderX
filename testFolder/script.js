//const {encrypt,decrypt} = require('gencrypt');
import { encrypt, decrypt } from 'gencrypt';

console.log(encrypt({
    'keycode':'FCE',
    'firstname':'Michael',
    'lastname':'Jonny'
}))
 console.log(decrypt('U2FsdGVkX19m06JdNm2k/1bWxv0RbHZBtucsGjrtMUZCfY9ws6j1zNFttZ1JSyyeQv5kzyW0nBuipYPtkT+5VWE6q+ceWZf1lhNGngKrt10='));
