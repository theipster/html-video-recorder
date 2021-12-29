import { getSeekableBlob } from "../ext/RecordRTC.js";  // TODO use "recordrtc" package with tree-shaking

// Missing duration metadata results in media being unseekable.
export async function fixWebmBlob(blob) {
  return new Promise(res => getSeekableBlob(blob, res));
};
