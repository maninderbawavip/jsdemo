const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)

    if(req.url === "/") {
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        res.end('<h1>hello g</h1> <a href="http://www.google.com">google.com</a>')
    } else if(req.url === "/api"){
        res.writeHead(200, {
            'Content-type': "application/json"
        })
        res.end(`{
            "firstName": "Maninder",
            "lastName": "bawa"
        }`)
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        })
        res.end('<h1>Page not found</h1>')
    }

})

server.listen(8000, '127.0.0.1', () => {
    console.log(`server is up and listening on http://localhost:800`)
})
