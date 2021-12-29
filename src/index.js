import { concat as concatBlobs } from "./blob.js";
import { record } from "./recorder.js";
import fixWebmMetaInfo from "@w-xuefeng/fix-webm-metainfo";

// https://nickdesaulniers.github.io/netfix/demo/bufferAll.html
// https://raw.githubusercontent.com/yusitnikov/fix-webm-duration/master/fix-webm-duration.js
// https://github.com/tak40548798/Fix-MediaRecorder-JSAPI-Webm-Duration
// https://www.webrtc-experiment.com/EBML.js

(function (video) {
  record(video)
    .then(concatBlobs)
    .then(fixWebmMetaInfo)
    .then(URL.createObjectURL)
    .then(console.log);
})(
  document.querySelector("video")  // YOUR JOB: get <video> element somehow.
);
