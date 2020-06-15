import { getHash } from "../hash";

test("Should generate different hashes", () => {
  const hash1 = getHash("this is hash one");
  const hash2 = getHash("this is hash two");
  expect(hash1).not.toEqual(hash2);
});

test("Should generate the same hash", () => {
  const hash1 = getHash("this should be the same");
  const hash2 = getHash("this should be the same");
  expect(hash1).toEqual(hash2);
});