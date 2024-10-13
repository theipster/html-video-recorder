import { concat as concatBlobs } from "./blob.js";
import { createRecorderFor } from "./recorder.js";

export async function record(media, autoRewind = true) {
  if (autoRewind) {
    media.currentTime = 0;
  }
  media.loop = false;  // Otherwise never finishes recording.
  media.muted = false; // Otherwise fails to find audio track.
  const recorder = createRecorderFor(media);
  media.play();
  return recorder
    .then(concatBlobs)
    .then(URL.createObjectURL);
}

window.record = record;
