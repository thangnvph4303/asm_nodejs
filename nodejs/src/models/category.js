import mongoose from "mongoose";


const CateSchema = new mongoose.Schema({
    name: {
        
        type: String
    },
})


export default mongoose.model("Category", CateSchema);