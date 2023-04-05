const http =require('http');
const App=require('./App');
const port=8000;

const server=http.createServer(App);
server.listen(port)