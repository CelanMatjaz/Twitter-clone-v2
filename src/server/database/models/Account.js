import { Schema } from 'mongoose';
import mongoose from '../index';

const accountSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

export default Account;