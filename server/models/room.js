const { Schema, model } = require ("mongoose")
const userSchema = new Schema(
    {
        Room: { type: String,  unique: true },
    },
    {timestamps: true}
);
module.exports = model("User", userSchema);