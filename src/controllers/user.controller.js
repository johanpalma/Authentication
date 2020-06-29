
const url = require('url');
const queryString = require('querystring');
const bcrypt = require('bcrypt-nodejs')
const User = require('../models/user.model');
const jwt = require('../services/jwt');

// Registration
function saveUser(req, res) {
    const { name, surname, nick, email, password, role } = req.body;
    var user = new User();
    if (name && surname && nick && email && password && role) {
        user.name = name;
        user.surname = surname;
        user.nick = nick;
        user.email = email
        user.role = role
        // Check for duplicate users 
        User.find({
            $or: [{
                    email: user.email.toLowerCase()
                },
                {
                    nick: user.nick.toLowerCase()
                }
            ]
        }).exec((err, users) => {
            if (err) return res.status(500).send({
                message: 'Error in user request'
            });
            if (users && users.length >= 1) {
                return res.status(200).send({
                    message: 'The user trying to register is not available'
                });
            } else {
                // Encrypt and save the data
                bcrypt.hash(password, null, null, (err, hash) => {
                    user.password = hash;
                    user.save((err, userStored) => {
                        if (err) return res.status(500).send({
                            message: 'User save error'
                        });
                        if (userStored) {
                            res.status(200).send({
                                user: userStored
                            });
                        } else {
                            res.status(404).send({
                                message: 'Do not register the user'
                            })
                        }
                    });
                });
            }
        });
    } else {
        res.status(200).send({
            message: 'Fill in the required fields!!'
        });
    }
}
//Login
function loginUser(req, res) {
    const { email, password, gettoken } = req.body;
    User.findOne({
        email
    }, (err, user) => {
        if (err) return res.status(500).send({
            message: 'Error in the request'
        });
        if (user) {
            bcrypt.compare(password, user.password, (err, check) => {
                if (check) {
                    // return user data
                    if (gettoken) {
                        // generate token and return 
                        res.status(200).send({
                            token: jwt.createToken(user)
                        });
                    } else {
                        // return user data
                        user.password = undefined;
                        return res.status(200).send({
                            user
                        });
                    }
                } else {
                    return res.status(404).send({
                        message: 'The user has not been able to log-in'
                    });
                }
            });
        } else {
            return res.status(404).send({
                message: 'The user could not login!! or is not registered'
            });
        }
    });
}

function getUsers(req, res) {
    User.find((err, userData) => {
      if (err) return res.status(500).json({ message: 'Error in get to data' });

      return res.json({ userData });
    })
}

function getUserById(req, res) {
    const { id } = req.params;
    User.findById(id, (err, userData) => {
        if (err) return res.status(500).json({ message: 'Error in get to data' });

        return res.json({ userData });
    })
}

function getUser(req, res) {
    let parsedUrl = url.parse(req.url)
    let parsedQs = queryString.parse(parsedUrl.query);

    User.find(parsedQs, (err, userData) => {
        if (err) return res.status(500).json({ message: 'Error in get to data', err });

        return res.json({ userData });
    })
}

module.exports = {
    saveUser,
    loginUser,
    getUsers,
    getUserById,
    getUser
}