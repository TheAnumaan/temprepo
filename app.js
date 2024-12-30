const http=require('http')

const server=http.createServer((req,res)=>{
if(req.url==='/'){
    res.end('welcome to the anumaan')
    return
}
if(req.url==='/about'){
    res.end('mysry')
    return
}

   res.end(`
        <p>Can't see</p>
    `);

server.listen(5000)