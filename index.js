const http = require('http');
fs = require('fs');
fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }   
        const PORT = process.env.PORT || 5000;
        const server = http.createServer((req, res) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end(html);  
        });
        server.listen(PORT, () => {
          console.log(`Server running on ${PORT}/`);
        });

});