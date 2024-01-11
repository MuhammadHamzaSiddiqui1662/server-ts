const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  testFeild: {
    type: String,
    required: [true, "testFeild is required, but received an empty value"],
  },
});

export const Test = mongoose.model("test", testSchema);
