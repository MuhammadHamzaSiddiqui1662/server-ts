const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  testFeild: {
    type: String,
    required: true,
  },
});

export const Test = mongoose.model("test", testSchema);
