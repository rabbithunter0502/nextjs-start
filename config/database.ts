import mongoose from 'mongoose';

let connnected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);
    if (connnected) {
        console.log('DB is alredy connected...');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI!);
        connnected = true;
    } catch (e) {

    }
}

export default connectDB;