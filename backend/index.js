const express=require('express')
const cors=require('cors');
const app=new express();
const PORT=4000;
app.use(express.json());
//connect the connection.js to server file
require('./connection');
const movieData=require('./model/movieData')
app.use(express.json());
app.use(cors())
//API endpoint to fetch data from DB
app.get('/listmovies',async(req,res)=>{
    try{
        const data=await movieData.find();
        res.send(data);
    }
    catch(error){
        console.log("Error occured")


    }
})
 

//checking whether the server is live or not
app.listen(PORT,()=>{
    console.log("Server is running on port Number: 4000");
})
//API endpoint to post a new movie data to the DB
app.post('/new-movie',async (req,res)=>{
    try{
        var item=req.body;
        const dataitem=new movieData(item);
        const savedata= await dataitem.save();
        res.send('POST SUCCESFULL');
    }
    catch(error){
        console.log(error);
    }
})