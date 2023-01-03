// const { Schema, model } = require("mongoose");
// const userSchema = new Schema(
//   {
//     username: { type: String, required: true, unique: true },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       validate: {
//         validator: (newEmail) => /@/.test(newEmail),
//         message: () => "This email is not valid",
//       },
//     },
//     password: { type: String, required: true },
//     picture: { type: String},
//     newMessage: {
//       type: Object,
//       default: {},
//     }
//     // groupId: { type: Schema.Types.ObjectId, required: false, ref: "Room" },
//   },
//   { timestamps: true }
// );
// module.exports = model("User", userSchema);

const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
      username: { type: String, required: true, unique: true },
      email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: [isEmail, "invalid email"],
    },
    password: { 
      type: String, 
      required: true 
    },
    picture: { 
      type: String 
    },
    newMessages: {
      type: Object,
      default: {},
    }
    // groupId: { type: Schema.Types.ObjectId, required: false, ref: "Room" },
  },
  {minimize: false},
  { timestamps: true })

  userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, (err, salt) => {
      if (err) return next(err);
      
      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
    })
    });

    return next();
    })

  userSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    return userObject;
  }

  userSchema.statics.findByCredentials = async function(email, password) {
    const user = await User.findOne({ email: email });
    if(!user) throw new Error('invalid email or password');
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new Error('invalid email or password');
    return user
  }

  

  const User = mongoose.model('User', userSchema);

  module.exports = User