
self.onmessage = (e) => {
  const n = e.data;
  let result = 0;

  for (let i = 0; i < n; i++) {
    result += i;
  }

  self.postMessage(`Sum 0 to ${n} = ${result}`);
};