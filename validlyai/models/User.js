import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
  fullname: { type: String, required: true }, // ✅ Must match input field name
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
}, { timestamps: true })

export default models.User || model("User", UserSchema);
