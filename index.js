/**
 * Created by lichun on 2016/11/15.
 */
require('babel-register');
require('babel-polyfill');
let https = require('https')
let fs = require('fs')
let path = require('path')
var app = require('./app').default;

app.listen(3000);
fs.access(path.join(__dirname, 'config/'), (err)=>{
    if(!err){
        https.createServer({
            key: fs.readFileSync(path.join(__dirname, 'config/500.key')),
            cert: fs.readFileSync(path.join(__dirname, 'config/500.crt'))
        }, app.callback()).listen(443)
    }
})
