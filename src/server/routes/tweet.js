import express from 'express';
import jwt from 'jsonwebtoken';

//DB
import Tweet from '../database/models/Tweet';
import Account from '../database/models/Account';

//Middleware
import { getToken, checkToken } from './middleware';

const router = express.Router();

router.get('/tweets', (req, res) => {
    Tweet.find({}, (err, arr) => {
        res.json(arr.reverse());
    });
});

router.get('/tweets/:username', (req, res) => {
    Tweet.find({username: req.params.username}, (err, arr) => {
        res.json(arr.reverse());
    });
});

router.get('/tweet/:id', getToken, checkToken, (req, res) => {
    Tweet.findById(req.params.id, (err, tweet) => {
        res.json(tweet);
    });
});

router.post('/tweet', getToken, checkToken, (req, res) => {
    const { title, body } = req.body;
    if(title && body){
        Account.findById(req.decoded.id, (err, account) => {
            if(err) res.json({errors: ['Something went wrong1']});
            else{
                const newTweet = new Tweet({
                    title,
                    body,
                    userID: req.decoded.id,
                    username: account.username,
                    date: new Date()
                });
                newTweet.save(err => {
                    if(err){
                        console.log(err);
                        res.json({errors: ['Something went wrong2']});
                    }
                    else{
                        res.json({msg: 'Tweet was added'});
                    }
                });
            }
        });        
    }
    else{
        res.json({errors: ['Something went wrong']});
    }
});

router.put('/tweet/:id', getToken, checkToken, (req, res) => {
    const { title, body } = req.body;
    const id = req.params.id;
    if(title && body){
        Tweet.findById(id, (err, tweet) => {
            if(err) res.json({errors: ['Something went wrong']});
            else{
                console.log(tweet);
                tweet.title = title;
                tweet.body = body;
                tweet.date = new Date();

                Tweet.findByIdAndUpdate(id, tweet, err => {
                    if(err) res.json({errors: ['Something went wrong']});                   
                    else res.json({msg: 'Tweet was updated'});
                });
            }
        });
    }
    else{
        res.json({errors: ['Something went wrong']});
    }
});

router.delete('/tweet/:id', getToken, checkToken, (req, res) => {
    const { id } = req.params;
    Tweet.findByIdAndDelete(id, err => {
        console.log(id);
        if(err) res.json({errors: ['Something went wrong']});
        else res.json({msg: 'Tweet was deleted'});
    });
});

export default router;