const crypto = require('crypto');
algorithm = 'aes-256-ctr',
    password = '@Au10tix!@#!2@!';

encrypt = (password) => {
    const encryptedPassword = crypto.pbkdf2Sync(password, 'au10tix', 100000, 64, 'sha512');
    return encryptedPassword.toString('base64');
}

module.exports = {
    encrypt,
};