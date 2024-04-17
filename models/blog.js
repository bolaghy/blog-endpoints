const mongoose =require('mongoose')

// title, descrption, tag, created by,

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "provide a blog title"]
    },
    desc:{
        type: String,
        required: [true, "provide a blog descrption"]
    },
    tag:{
        type: String,
        enum: ['lifestyle','Nature','Technology','sport']
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "provide a writer"]
    }
}, {timestamps: true});

module.exports = mongoose.model("Blog", blogSchema);