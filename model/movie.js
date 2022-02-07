import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var movie = new Schema({
    _id: {
        type: String,
        required: true
    },
    image:{
        type: String
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

mongoose.models = {};

var Movie = mongoose.model('next-movies', movie);

//mongoose version below 6
export default Movie;