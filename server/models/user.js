const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (newEmail) => /@/.test(newEmail),
        message: () => "This email is not valid",
      },
    },
    password: { type: String, required: true },
    image: { type: URL, required: false },
    groupId: { type: Schema.Types.ObjectId, required: false, ref: "Room" },
  },
  { timestamps: true }
);
module.exports = model("User", userSchema);
