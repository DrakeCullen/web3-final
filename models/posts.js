const { ObjectId } = require("bson")
var mongoose = require("mongoose")

var Schema = mongoose.Schema

var PostSchema = new Schema({
    post_id: { type: ObjectId, required: true },
    title: { type: String, required: true, max: 30 },
    img:     { type: String, required: true, max: 90 }
})

module.exports = mongoose.model("Post", PostSchema, "posts")
