export async function concat(blobs) {
  if (blobs.length == 0) throw "No blobs received.";
  if (blobs.length == 1) return blobs[0];
  return new Blob(blobs, { type: blobs[0].type });
}
