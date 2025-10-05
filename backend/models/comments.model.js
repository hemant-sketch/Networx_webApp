import mongoose from 'mongoose';
import User from "./user.model.js";
import Posts from "./posts.model.js";

const commentSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    comment: {
        type: String,
        required: true
    }
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;