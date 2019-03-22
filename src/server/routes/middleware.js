import jwt from 'jsonwebtoken';
const secret = 'secret';

import Account from '../database/models/Account';

export const registerCredsValidation = (req, res, next) => {
    const { username, email, password, passwordRepeat } = req.body;
    const errors = [];
    if(username && email && password && passwordRepeat){
        if(password != passwordRepeat) errors.push('Passwords do not match');
        else {
            if(password.length < 8) errors.push('Password is not at least 8 characters long');
            if(passwordRepeat.length < 8) errors.push('Repeated password is not at least 8 characters long');
        }

        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            errors.push('Email does not have the right format');
        }

        if(!/[0-9a-fA-F]/.test(username)) errors.push('Username can only contain numbers and upper and lower case letters');

        if(errors.length === 0){
            next();
        }
        else{
            res.json({errors});
        }
    }
    else{
        res.json({errors: ['At least one of the fields was empty']});
    }
}

export const loginCredsValidation = (req, res, next) => {
    const { email, password } = req.body;
    const errors = [];
    if(email && password){
        if(password.length < 8) errors.push('Password is not at least 8 characters long');

        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            errors.push('Email does not have the right format');
        }
        
        if(errors.length === 0){
            next();
        }
        else{
            res.json({errors});
        }
    }
    else{
        res.json({errors: ['At least one of the fields was empty']});
    }
}

export const getToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if(token){
        const tokenValue = token.split(' ');
        if(tokenValue[0] === 'Bearer' && tokenValue[1]) req.token = tokenValue[1];
        next();
    }
    else{
        res.status(401);
        res.json({error: 'Unauthorized'});
    }
}

export const checkToken = (req, res, next) => {    
    jwt.verify(req.token, secret, (err, decoded) => {
        if(err){
            res.status(401);
            res.json({errors: ['Unauthorized']});
        }
        else{
            Account.findById(decoded.id, (err, account) => {
                if(err || !account) res.json({errors: ['Unauthorized']});
                else{
                    req.decoded = decoded;
                    next();
                }
            });            
        }
    });
}