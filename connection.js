const mongoose=require('mongoose')

const connectDb=async () =>{
    try {
        const connection=await mongoose.connect(process.env.MONGO_URI)
        if(connection){
            console.log("Connected to MongoDB"); 
        }
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
    }
}

module.exports={connectDb}