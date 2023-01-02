const { Schema, model } = require ("mongoose")
const userSchema = new Schema(
    {
        members: { type: Array },
    },
    {timestamps: true}
);
module.exports = model("User", userSchema);