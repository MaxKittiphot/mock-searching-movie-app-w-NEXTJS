import connectDB from '../../middleware/mongodb';
import User from '../../model/user';

const handler = async (req, res) => {
        try {
            const users = await User.find({})
            res.status(200).json({success:true, data:users})
        }
        catch (error) {
            res.status(400).json({success:false})
        }
};

export default connectDB(handler);