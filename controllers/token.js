const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
    const tokenValidate = req.headers['authorization'];
    if (typeof tokenValidate !== 'undefined') {
        const token = tokenValidate.split(' ');
        const getToken = token[1];
        req.token = getToken
        next();
    } else {
        res.sendStatus(403)
    }
}

module.exports = {
    verifyToken,
};