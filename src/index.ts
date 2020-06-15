import { getPath, save } from "./files";
import { getHash } from "./hash";
import * as tts from "./tts";
import type { TtsOptions } from "./tts";

export async function getAudio(text: string, options: Partial<TtsOptions> = {}): Promise<{ path: string }> {
  const hash = getHash(text);

  const cachedAudioPath = await getPath(hash);
  if (cachedAudioPath) {
    return {
      path: cachedAudioPath,
    }
  }

  const audio = await tts.getAudio(text, options);

  if (audio) {
    const path = await save(hash, audio);
    return {
      path,
    }
  }

  throw new Error("Unable to get audio")
}