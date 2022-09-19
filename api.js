const express = require('express');

const server = express();

//AIzaSyAbX63yjKV_UgfzdT-PsqoLvjvcakSZ0xE
var api = "https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyAbX63yjKV_UgfzdT-PsqoLvjvcakSZ0xE"
//query params = ?nome=NodeJs
//Route Params = /curso/2
//request Body = {nome:"felipe", idade:"23"}

//localhost:3000/api
server.get('/api',(req, res)=>{
    const nome = req.query.nome
    return res.json({teste:`Teste${nome}`})
})

server.listen(3000)