var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_51a_red_dev';
const auth = (req, res, next) => {
    const { authorization } = req.headers
    if(!authorization){
        return res.status(403).send({message: 'The request does not have the authorization header'});
    }
    var token = authorization.replace(/['"]+/g, '');
    try {
     var payload = jwt.decode(token, secret);
     if (payload.exp <= moment.unix()) {
         return res.status(401).send({
            message: 'The token has expired'
         });
     }

     if (payload.role.toLowerCase() != 'admin') {
        return res.status(401).send({
            message: 'you do not have access to this resource'
         });
     }
    } catch (e) {
        return res.status(404).send({
            message: 'The token is not valid'
         });
    }
    req.user = payload;
    next();
}

module.exports = {
    auth
};