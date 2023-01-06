const express=require("express");
const app=express();
app.use(express.static("assets"));
app.get("/",function (req, res) {
    res.sendFile(__dirname+"/index.html");
})
app.listen(process.env.PORT || 3000,function () {
    console.log("The server has been started at port 3000");
})