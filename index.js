const express = require ('express')
const app = express()
const cors = require ('cors')
const filmRoutes = require('./routes/filmRoutes')
const bodyParser = require('body-parser')

/*
Cors Policy
const https = require('https')
const path = require('path')
const fs = require('fs')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
*/
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('',(req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
}, filmRoutes)


app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server Start at :" + process.env.PORT)
})

/*
const sslServer = https.createServer({
    key : fs.readFileSync(path.join(__dirname, 'certification', 'key.pem')),
    cert:fs.readFileSync(path.join(__dirname, 'certification', 'cert.pem'))
}, app)

sslServer.listen(process.env.PORT || 3000, ()=>{
    console.log('Server start at HTTPS')
})
*/
