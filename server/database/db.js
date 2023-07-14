import mongoose from "mongoose";

const Connection = async (username,password)=>{
    const URL = `mongodb+srv://${username}:${password}@blog-world.txje14y.mongodb.net/?retryWrites=true&w=majority`
    try {
        
        await mongoose.connect(URL, {useNewUrlParser : true});
        console.log('database connected successfully');
    } catch (error) {
        console.log('Error while connecting data' ,error);
    }
}

export default Connection;