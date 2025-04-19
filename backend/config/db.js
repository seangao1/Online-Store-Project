import mongoose from 'mongoose';


export const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URL); 
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }

    catch(err){
        
        console.log(`Error: ${error.message}`);
        process.exit(1) // code 1 means exit with failure, 0 means success;

    }

};
