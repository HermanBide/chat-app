const { Schema, model } = require("mongoose");
const messageSchema = new Schema(
  {
    content: { type: String, trim: true },
    sender: { type: Schema.Types.ObjectId, ref: "User"},
    chat: { type: Schema.Types.ObjectId, ref: "Chat"},
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = model("Message", messageSchema);
