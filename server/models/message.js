const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    conversationId: { type: String, required: true },
    sender: { type: String, required: true },
    messageAKAtext: { type: String, required: true },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = model("User", userSchema);
