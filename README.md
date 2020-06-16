# Text-to-Speech

Allows for easy access to Google's Text-to-Speech API. It also caches the audio to a temp file.

## Features

- [x] Turns text into ogg audio files
- [x] Caches to a temp folder

## Installation

```bash
npm install --save @elmotron9000/tts
```

This library requires API access to Google's Text-to-Speech API on GCP. Follow steps 1-5 found [here](https://cloud.google.com/text-to-speech/docs/quickstart-client-libraries).

## Usage

```ts
// Don't forget to set the GOOGLE_APPLICATION_CREDENTIALS environment var
import { getAudio } from "@elmotron9000/tts";

(async () => {
  const output = await getAudio("This is a test");

  console.log(output.path);
})();
```

## Disclaimer

This was built for a hackathon project. There will be bugs!