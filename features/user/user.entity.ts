import { Schema, model } from "mongoose";
import { isEmail } from "validator";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "firstname is required, but recived an empty value"],
  },
  lastName: {
    type: String,
    required: [true, "lastName is required, but recived an empty value"],
  },
  email: {
    type: String,
    required: [true, "email is required, but recived an empty value"],
    unique: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "password is required, but recived an empty value"],
    minlength: [3, "minimun password length is 6 characters"],
  },
});

export const User = model("user", userSchema);
