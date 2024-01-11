import { Schema, model } from "mongoose";

const testSchema = new Schema({
  testFeild: {
    type: String,
    required: [true, "testFeild is required, but received an empty value"],
  },
});

export const Test = model("test", testSchema);
