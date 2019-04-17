const http = require('http');
const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World new feature</h1>\n  <p>Demo App test </p>');
});
server.listen(PORT, () => {
  console.log(`Server running on ${PORT}/`);
});
