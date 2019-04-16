const http = require('http');
const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n  Demo App test 3');
});
server.listen(PORT, () => {
  console.log(`Server running on ${PORT}/`);
});
