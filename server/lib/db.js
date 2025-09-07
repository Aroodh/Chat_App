import mongoose from "mongoose";

export const connectDB=async ()=>{
    try{
        mongoose.connection.on('connected',()=>console.log("DataBase connected"))
        await mongoose.connect(`${process.env.MONGODB_URL}/chat-app`)
    }catch(error){
        console.log("The MongoDb connection error")
    }
}