const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)

    if(req.url === "/") {
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        res.end('<h1>hello g</h1> <a href="http://www.google.com">google.com</a>')
    }

})

server.listen(8000, '127.0.0.1', () => {
    console.log(`server is up and listening on http://localhost:800`)
})
