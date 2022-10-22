//
// Add your Util Functions Here, Use Example : util
//
export function arrayChuck(arr: any, chunkSize: number): any {
  var chunks = [];
  var i = 0;
  var n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, (i += chunkSize)));
  }

  return chunks;
}
