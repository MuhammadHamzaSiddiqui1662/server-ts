import { Schema, model } from "mongoose";

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
  },
  password: {
    type: String,
    required: [true, "password is required, but recived an empty value"],
  },
});

export const User = model("user", userSchema);
