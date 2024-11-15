const express=require('express');
const app=new express();

const cors=require('cors');
app.use(cors());

const dotenv=require('dotenv');
dotenv.config();

port=process.env.PORT

require('./db/connection');

app.use(express.json());

const todorouter=require('./routes/todoroutes');
app.use('/todo',todorouter);



app.listen(port,()=>{
   console.log(`Server is successfully running on the port ${port}`);
})
