const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const crypto = require('crypto');

const secretKey = process.env.SECRET_KEY;
const iv = process.env.IV;

module.exports.encrypt = (value) => {
    const encrypter = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
    let encryptedMessage = encrypter.update(value, 'utf8', 'hex');
    
    return encryptedMessage += encrypter.final('hex');
}

module.exports.decrypt = (value) => {
    const decrypter = crypto.createDecipheriv('aes-256-cbc', secretKey, iv);
    let decryptedMessage = decrypter.update(value, 'hex', 'utf8');

    return decryptedMessage += decrypter.final('utf8');
}