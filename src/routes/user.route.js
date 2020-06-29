const { Router  } = require('express');
const router = Router();

var md_auth = require('../middleware/authenticated');

const { saveUser, loginUser,
        getUser, getUserById, getUsers } = require('../controllers/user.controller');

router.post('/save_user', saveUser);
router.post('/login', loginUser);
router.get('/get_users', md_auth.auth, getUsers);
router.get('/get_users/q', md_auth.auth, getUser);
router.get('/get_user/:id',md_auth.auth , getUserById);


module.exports = router;