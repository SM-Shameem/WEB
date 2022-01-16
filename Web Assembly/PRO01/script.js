// (async () => {
//   const codePromise = fetch('source.wasm');
//   const moduleWASM = await WebAssembly.instantiateStreaming(codePromise);
//   console.log(moduleWASM);
// })();

(async () => {
  const codePromise = fetch('source.wasm');
  const { instance } = await WebAssembly.instantiateStreaming(codePromise);

  // [128734, 3242321, 12,3,12,3, 'h', 'e', 'l', 'l', 'o']
  const buffer = new Uint8Array(instance.exports.memory.buffer);
  const pointer = instance.exports.hellowworld();

  var string = null;
  for (var i = pointer; buffer[i]; i++)
    string += String.fromCharCode(buffer[i]);

  document.getElementById('container').innerHTML = string;
})();

// fetch('source.wasm')
// .then(response => response.arrayBuffer())
// .then(bytes => WebAssembly.instantiate(bytes))
// .then(results => {
//   instance = results.instance;
//   document.getElementById('container').textContent = instance.exports.main();
// })
// .catch(console.error);
