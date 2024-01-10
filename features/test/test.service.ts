import { Test } from "./test.entity";

export const getAll = async () => {
  const tests = await Test.find();
  return tests;
};
