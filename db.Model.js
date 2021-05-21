import mongoose from "mongoose";

const tiktikSchema =mongoose.Schema({
    link:String,
    channel:String,
    song:String,
    likes:String,
    messages:String,
    description:String,
    shares:String,
});

export default mongoose.model("tiktokVideos", tiktikSchema);