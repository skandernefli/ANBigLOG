const https =require('https');
const fs=require('fs');
const key=fs.readFileSync('private.key');
const cert=fs.readFileSync('certificate.crt');
const App=require('./App');
const port=8000;
const cred={
    key,
    cert
}
App.listen(port);
const server=https.createServer(cred,App);
server.listen(8443);