import connectDB from '../../../middleware/mongodb';
import Movie from '../../../model/movie';

const handler = async (req, res) => {

    const {id} = req.query;

    if(req.method==='DELETE'){
        try{
            await Movie.findByIdAndDelete(id).exec();
            res.status(200).json({success:true, data: id})
        }catch(error){
            res.status(400).json({success:false, data: id})
        }
    }
}

export default connectDB(handler);
