import { concat as concatBlobs } from "./blob.js";
import { createRecorderFor } from "./recorder.js";
import fixWebmMetaInfo from "@w-xuefeng/fix-webm-metainfo";

export async function record(media, autoRewind = true) {
  if (rewind) {
    media.currentTime = 0;
  }
  const recorder = createRecorderFor(media);
  media.play();
  return recorder
    .then(concatBlobs)
    .then(fixWebmMetaInfo)
    .then(URL.createObjectURL);
}

window.record = record;
