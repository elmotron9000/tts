import type { google } from '@google-cloud/text-to-speech/build/protos/protos';
declare type TtsOptions = {
    languageCode: string;
    ssmlGender: keyof typeof google.cloud.texttospeech.v1.SsmlVoiceGender;
    audioEncoding: keyof typeof google.cloud.texttospeech.v1.AudioEncoding;
};
export declare function getAudio(text: string, { languageCode, ssmlGender, audioEncoding }?: Partial<TtsOptions>): Promise<string | Uint8Array | null | undefined>;
export {};
