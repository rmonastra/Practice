const express = require("express"),
      app = express();
      cors = require("cors"),
      bodyParser = require("body-parser"),
      mongodb = require("mongodb"),
      mongoose = require("mongoose")
      Exercise = require("./models/exercise")
    
mongoose.connect("mongodb://localhost/practices")

app.use(cors())

app.use(bodyParser.urlencoded({
 extended: false
  }))
app.use(bodyParser.json())

app.use(express.static("public"))
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
});

app.post("/api/exercise/add", (req,res) => {
let username = req.body.userId;
    let data = new Exercise({
        exercise: username
    })
 
    data.update(
        {$push: {exercise: username}}
    )
    data.save(
         res.json(data)
    )
})

//Listen on connection port
 let port = process.env.PORT || 3000;
 app.listen(port, () => {
 console.log("Listening on port: " + port);
});