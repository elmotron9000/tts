import { join } from "path";
import { promises as fs, exists as existsCallback } from "fs";
import { promisify } from "util";

const existsAsync =  promisify(existsCallback);

export async function getPath(name: string): Promise<string | null> {
  const fullPath = cachePath(addFileExtension(name))

  return await existsAsync(fullPath) ? fullPath : null;
}

export async function save(name: string, audio: string | Uint8Array): Promise<string> {
  const fullPath = cachePath(addFileExtension(name))
  // TODO change file type
  await fs.writeFile(fullPath, audio, "binary");
  return fullPath;
}

function addFileExtension(name: string): string {
  return `${name}.ogg`;
}

function cachePath(...path: string[]): string {
  return join(__dirname, "..", "cache", ...path);
}
