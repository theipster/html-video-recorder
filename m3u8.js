const downloadPlaylist = async (playlistUrl) => {
  const playlist = await (await fetch(playlistUrl)).text();
  const segmentUrls = playlist.split(/\r?\n/)
    .map((line, index, lines) => /^#EXTINF: *([0-9]+(\.[0-9]+)?)(,.*)?/.test(line) && lines[index + 1])
    .filter(segment => segment != false)
    .map(segment => new URL(segment, playlistUrl).href);

  const sleep = sec => new Promise(res => setTimeout(res, sec * 1000));
  const segmentBlobs = [];
  const now = Date.now();
  for (var i = 0; i < segmentUrls.length; i++) {  // Sleeping doesn't work with Array.forEach :(
    await sleep(3 + (i % 4 == 3) * 7);
    console.log(`Fetching at ${(Date.now() - now) / 1000}s...`);
    segmentBlobs.push(await (await fetch(segmentUrls[i])).blob());
  }
  return URL.createObjectURL(new Blob(segmentBlobs, { type: segmentBlobs[0].type }));
};

// Usage: downloadPlaylist("https://.../playlist.m3u8").then(console.log)
