# html-video-recorder

## Build

Run the following to produce the build artifact `dist/bundle.js`:

```sh
$ npm run build
```

## Usage

First, navigate your browser to the HTML page that contains the `<video>` you want to record.

Next, copy the contents of `dist/bundle.js` and paste into your browser console. Doing so will make available a function with the following signature:

```js
window.record = async (media: HTMLMediaElement, autoRewind: boolean = true): Promise<String>;
```

By invoking this function with the `<video>` HTML element of your choosing, both the playback **and** the recording of that video will simultaneously begin.

Likewise, when the video finishes playing, recording will also simultaneously finish. When this happens, a unique [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) URL (i.e. of the format `blob:https://<domain>/<uuid>`) will then be generated for you to access the new recording - for example, you can directly navigate to this URL in a new browser tab to replay the recording and/or save it.

### Example

```js
// In your browser console...

// Decide which video to record
const myVideo = document.querySelector("video#kittens");

// Record, then dump out the URL of the recording
window.record(myVideo).then(console.log);
```

## References

- [Example page with a `<video>` element](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html)
