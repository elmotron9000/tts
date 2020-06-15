import { TextToSpeechClient } from '@google-cloud/text-to-speech';

import type { google } from '@google-cloud/text-to-speech/build/protos/protos';

const client = new TextToSpeechClient();

export type TtsOptions = {
  languageCode: string;
  ssmlGender: keyof typeof google.cloud.texttospeech.v1.SsmlVoiceGender;
  audioEncoding: keyof typeof  google.cloud.texttospeech.v1.AudioEncoding;
};

export async function getAudio(
  text: string,
  { languageCode = 'en-US-Wavenet-B', ssmlGender = 'MALE', audioEncoding = 'MP3' }: Partial<TtsOptions> = {},
): Promise<string | Uint8Array | null | undefined> {
  const [ response ] = await client.synthesizeSpeech({
    input: {
      ssml: `<speak>${text}</speak>`,
    },
    voice: {
      languageCode,
      ssmlGender,
    },
    audioConfig: {
      audioEncoding,
    },
  });

  return response.audioContent;
}
