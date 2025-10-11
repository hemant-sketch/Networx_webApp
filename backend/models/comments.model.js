import mongoose from 'mongoose';
import User from "./user.model.js";
import Posts from "./posts.model.js";

const CommentSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Posts"
    },
    comment: {
        type: String,
        required: true
    }
});

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;