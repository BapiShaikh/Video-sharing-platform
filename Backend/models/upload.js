const mongoose = require("mongoose");

const uploadSchema = mongoose.Schema({
    // video: { type: String },
    // publishername: { type: String },
    // publisherimg: { type: String },
    // moviename: { type: String },
    // tagline: { type: String },
    // Date: { type: String, default: new Date().toLocaleDateString() },
    // duration: { type: Number },
    // views: { type: Number },
    name: String,
    url: String,
    cloudinary_id: String,
    description: String,
    publishername: String,
    tagline: String,
    duration: String,
    views: String,
});


module.exports = mongoose.model("upload", uploadSchema)