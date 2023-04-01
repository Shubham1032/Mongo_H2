const express = require('express');
const app= express();
const router = require("./routes/employee")

app.use(express.json());
app.use(router);
app.listen(5050,()=>{
    console.log("Project running on PORT:5050")
})