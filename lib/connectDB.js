import mongoose from 'mongoose'


const connectDB = async () => {
    try{
        mongoose.connect(process.env.MONGO_URL)
        console.log('Server Is Successfully Connected To The MongoDB');
        
    }catch(err){
        console.log('There Is Something Wrong In Connect To The MongoDB', err);
        
    }
}

export default connectDB