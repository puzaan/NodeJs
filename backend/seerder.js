import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Users from './data/user.js'
import  user from './model/userModel.js'
import connectDB from './database/db.js'


dotenv.config();
connectDB();

const importData = async() => {
    try {
        await user.deleteMany();

        const createdUser = await user.insertMany(Users);
        // to define admin user in database
        const adminUser = createdUser[0]._id;
        console.log('data imported in database')
    } catch (err) {
        console.error(`${err}`.red)
        process.exit(1)
    }
}
importData();