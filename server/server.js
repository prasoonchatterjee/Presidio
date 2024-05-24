const express = require('express');
const authRoutes = require('./routes/auth')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
  res.send({message:"homepage request"})
})
app.use('/api/auth',authRoutes);

mongoose
  .connect(`mongodb+srv://chatterjeeprasoon:Kby99FM5glLlbYvw@clusterpresidio.82sgog4.mongodb.net/?retryWrites=true&w=majority&appName=clusterPresidio`)
  .then(()=>{
    app.listen(8080,()=>{
      console.log("connected to mongo and listening on 8080")
    })
  })
  .catch((error)=>{
    console.log(error);
  })