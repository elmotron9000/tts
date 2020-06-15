import { join } from 'path';
import { promises as fs, exists as existsCallback, mkdir as mkdirCallback } from 'fs';
import { promisify } from 'util';
import { tmpdir } from 'os';

const existsAsync = promisify(existsCallback);
const mkdirAsync = promisify(mkdirCallback);

export async function getPath(name: string): Promise<string | null> {
  const fullPath = await cachePath(addFileExtension(name));

  return (await existsAsync(fullPath)) ? fullPath : null;
}

export async function save(name: string, audio: string | Uint8Array): Promise<string> {
  const fullPath = await cachePath(addFileExtension(name));
  // TODO change file type
  await fs.writeFile(fullPath, audio, 'binary');
  return fullPath;
}

function addFileExtension(name: string): string {
  return `${name}.ogg`;
}

async function cachePath(...path: string[]): Promise<string> {
  const tempDirPath = await createTempDir();
  return join(tempDirPath, ...path);
}

async function createTempDir(): Promise<string> {
  const tempPath = join(tmpdir(), 'elmotron9000');

  if (!(await existsAsync(tempPath))) {
    await mkdirAsync(tempPath);
  }

  return tempPath;
}
