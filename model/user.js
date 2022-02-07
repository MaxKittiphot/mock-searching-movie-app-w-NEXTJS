import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    }
})

mongoose.models = {};

var User = mongoose.model('User', user);

export default User;