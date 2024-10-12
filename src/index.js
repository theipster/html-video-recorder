import { concat as concatBlobs } from "./blob.js";
import { createRecorderFor } from "./recorder.js";
import fixWebmMetaInfo from "@w-xuefeng/fix-webm-metainfo";

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
    .then(fixWebmMetaInfo)
    .then(URL.createObjectURL);
}

window.record = record;
