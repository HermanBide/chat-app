const { Schema, model } = require('mongoose');
const groupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId, 
        ref: "User",
    },
    roomId: {
        type: Schema.Types.ObjectId, 
        ref: "Room",
    },

    TotalMessages: {
        type: Number,
        default: 0
    }
},
    {timestamps: true}
)

module.exports = model("groups", groupSchema)