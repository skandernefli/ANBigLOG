const https =require('https');
const fs=require('fs');
const options={
    key:fs.readFileSync('ssl/key.pem'),
    cert:fs.readFileSync('ssl/cert.pem')
}
const App=require('./App');
const port=8000;

const server=https.createServer(options,App);
server.listen(port)