import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDomServer from 'react-dom/server'
import App from '../src/App'
let app = express()
let PORT = 8000 || process.env.WPORT

app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html', 'utf-8', (err, data) => {
        if (err) {
            return req.status(500).send("sever side error ")
        } else {
            return res.status(200).send(data.replace('<div id="root"><div>', `<div id="root"> ${ReactDomServer.renderToString(<App />)}<div>`))
        }
    }))
})

app.use(express.static(path.resolve(__dirname, "..", "build/static/")))

app.listen(PORT, () => {
    console.log(" server started at 8000 ");
})