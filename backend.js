// 1. create blank "server.js" file
// 2. npm init
// 3. npm install express --save

const express = require('express')
const dateabase = express()

// this is where you set up how to respond to some specific API call to some specifc route
dateabase.get('/dog', dog_response)



dateabase.get('/cat', (req, res) => res.send("meow"))

dateabase.use(express.urlencoded({ extended: true }))

function dog_response(req, res){
    // see whats in the request
    if (req.body == "big") {
        res.send({backend_dog: "chihuahua"});
    } else {
        res.send({backend_dog: "husky"});
    }
}

dateabase.listen(4000, console.log("im running"))

// HTTP get request to the address localhost:4000/dog with request body "big", it will send back "chihuahua", otherwise "husky"
