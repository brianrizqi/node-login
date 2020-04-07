require('dotenv').config();
const express = require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');
router.use(cors());

router.post('/register', (req, res) => {
    const today = new Date();
    const data = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        created_at: today
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(users => {
            if (!users) {
                User.create(data)
                    .then(users => {
                        let token = jwt.sign(users.dataValues, process.env.SECRET_KEY, {
                            expiresIn: 1440
                        });
                        res.json({
                            token: token
                        })
                    })
                    .catch(err => {
                        res.send('error : ' + err)
                    })
            } else {
                res.json({error: 'User already exist'});
            }
        })
        .catch(err => {
            res.send('error : ' + err)
        })
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(users => {
            if (bcrypt.compareSync(req.body.password, users.password)) {
                let token = jwt.sign(users.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.json({
                    token: token
                })
            } else {
                res.send('User does not exist')
            }
        })
        .catch(err => {
            res.send('error : ' + err)
        })
})

router.get('/profile', (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) res.sendStatus(401);
    var user;
    jwt.verify(token, process.env.SECRET_KEY, (err, result) => {
        if (err) res.send(err)
        user = result;
    });

    User.findOne({
        where: {
            id: user.id
        }
    })
        .then(users => {
            if (users) {
                res.json(users)
            } else {
                res.send('User does not exist')
            }
        })
        .catch(err => {
            res.send('error : ' + err)
        })

});

module.exports = router;
