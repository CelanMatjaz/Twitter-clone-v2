import { Schema } from 'mongoose';
import mongoose from '../index';

const tweetSchema = new Schema({
    userID: {
        type: String, 
        required: true
    },
    username: {
        type: String, 
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;