# html-video-recorder

## Usage

First, copy the bundle contents from https://theipster.github.io/html-video-recorder/bundle.js (updated via a CI pipeline).

Next, navigate your browser to the HTML page that contains the `<video>` you want to record, and paste the bundle contents into your browser console. Doing so will make available a function with the following signature:

```js
window.record = async (media: HTMLMediaElement, autoRewind: boolean = true): Promise<String>;
```

Finally, invoke this function with the `<video>` HTML element of your choosing, at which point both the playback **and** the recording of that video will simultaneously begin.

When the video finishes playing, recording will also simultaneously finish and a unique [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) URL (i.e. of the format `blob:https://<domain>/<uuid>`) will then be generated for you to access the new recording. For example, you can directly navigate to this URL in a new browser tab to replay the recording and/or save it.

### Example

```js
// After pasting the bundle contents into your browser console...

// Decide which video to record
const myVideo = document.querySelector("video#kittens");

// Record, then dump out the URL of the recording
window.record(myVideo).then(console.log);
```

## Development

To locally rebuild the bundle:

```sh
$ npm run build
```

## References

- [Example page with a `<video>` element](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html)
