import mongoose from 'mongoose';
import User from "./user.model.js";

const connectionRequest = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    connectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status_accepted: {
        type: Boolean,
        deafult: null,
    }
});

const ConnectionRequest = mongoose.model("ConnectionRequest", connectionRequest);

export default ConnectionRequest;