import { createHash } from "crypto";

export function getHash(input: string): string {
  return createHash("sha1").update(input).digest("hex");
}