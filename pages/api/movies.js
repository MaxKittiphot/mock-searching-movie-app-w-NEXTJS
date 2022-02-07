import connectDB from '../../middleware/mongodb';
import Movie from '../../model/movie';

const handler = async (req, res) => {
    if(req.method==='GET'){
        try {
            const movies = await Movie.find({})
            res.status(200).json({success:true, data:movies})
        }
        catch (error) {
            res.status(400).json({success:false, data: error})
        }
    }
    if(req.method==='POST'){
        try{
            const movie = req.body;
            const newMovie = new Movie(movie);
            await newMovie.save();
            res.status(200).json({success:true, data:movie})
        }catch(error){
            res.status(400).json({success:false, data: error})
        }
    }
};

export default connectDB(handler);