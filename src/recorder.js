export async function createRecorderFor(media) {
  const buffer = [];

  // Bind recorder state to media state (assume no seeking, for simplicity)
  media.captureStream = media.captureStream || media.mozCaptureStream;  // FF compat
  const recorder = new MediaRecorder(media.captureStream());    // TODO: inspect options from media source
  media.onended = event => recorder.stop();
  media.onpause = event => recorder.pause();
  media.onplay = event => recorder.state == "inactive" && recorder.start() || recorder.resume();

  // Handle recorder events
  recorder.ondataavailable = event => buffer.push(event.data);
  recorder.onstart = () => buffer.length = 0;
  recorder.onwarning = event => console.warn(event);
  return new Promise((resolve, reject) => {
    recorder.onerror = event => reject(event);
    recorder.onstop = event => resolve(buffer);
  });
}

export async function record(media, rewind = true) {
  if (rewind) {
    media.currentTime = 0;
  }
  const recorder = createRecorderFor(media);
  media.play();
  return recorder;
}
