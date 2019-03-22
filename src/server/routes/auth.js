import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const salt = bcrypt.genSaltSync(10);
const secret = 'secret';
//DB
import Account from '../database/models/Account';

import { registerCredsValidation, loginCredsValidation, getToken, checkToken } from './middleware';

const router = express.Router();

router.get('/users', (req, res) => {
    Account.find({}, (err, arr) => {
        res.json(arr);
    })
})

router.post('/register', registerCredsValidation, (req, res) => {
    const { username, email, password } = req.body;
    Account.findOne({ email: email }, (err, account) => {
        if(account){
            res.json(['An account with that email already exists']);
        }
        else{
            Account.findOne({ username: username }, (err, account) => {
                if(account){
                    res.json(['An account with that username already exists']);
                }
                else{
                    const newAcc = new Account({
                        username,
                        email,
                        password: bcrypt.hashSync(password, salt)
                    });
                    newAcc.save(err => {
                        if(err){
                            res.json({errors: ['There was and error creating your account']});
                        }
                        else{
                            res.json({status: 'Register_success'})
                        }
                    })
                }
            });            
        }
    });
});

router.post('/login', loginCredsValidation, (req, res) => {
    const { email, password } = req.body;
    Account.findOne({ email: email }, (err, account) => {
        if(err) res.json({errors: ['There was an error logging in']});
        else if(!account) res.json({errors: ['An account with that email does not exist']});
        else{
            if(bcrypt.compareSync(password, account.password)){
                jwt.sign({id: account._id}, secret, (err, token) => {
                    res.json({
                        status: 'Login_success',
                        token,
                        userInfo: {
                            username: account.username,
                            email: account.email
                        }
                    });
                });
            }
            else{
                res.json(['Incorrect password']);
            }
        }   
    });
});

router.post('/login-check', getToken, checkToken, (req, res) => {
    Account.findById(req.decoded.id, (err, account) => {
        res.json({
            userInfo: {
                username: account.username,
                email: account.email
            }
        });
    });
});

export default router;