const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
      validate: [isEmail, "invalid email"],
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    picture: {
      type: String,
      default: "http://icon-library.com/images/annoymous-avatar-icon/annoymous-avatar-icon-25-jpg",
    },
    // isAdmin: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
    status: {
      type: String,
      default: "online",
    },
  },
  { minimize: false },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function(enteredPassword) {
 return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if(!this.isModified) {
    next()
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
})


const User = mongoose.model("User", userSchema);

module.exports = User;