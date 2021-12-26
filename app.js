const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended :true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res) {
  const fName = req.body.fname;
  const sName = req.body.sname;
  const eName = req.body.ename;
  console.log("Hello, " + fName);

  const data = {
    members: [
      {
      email_address: eName,
      status: "subscribed",
      merge_fields: {
        FNAME: fName,
        LNAME: sName
       }
     }
    ]
 };

  const jsonData = JSON.stringify(data);
  const url = "https://us20.api.mailchimp.com/3.0/lists/269ba6bd6a";
  const option = {
    method: "POST",
    auth: "kritartha:#"
  }

  const request = https.request(url, option, function(response) {
      response.on("data", function(data) {
      //console.log(JSON.parse(data));

      var code = response.statusCode;
      if(code == 200) {
        res.sendFile(__dirname + "/index.html");
      } else {
        res.sendFile(__dirname + "/error.html");
      }
    })
  })
  request.write(jsonData);
  request.end();
});

app.post("/failure", function(req, res){
  res.redirect("/");
})

app.listen(process.env.PORT || 3000, function() {
  console.log("The server is Working on Port 3000.");
})
