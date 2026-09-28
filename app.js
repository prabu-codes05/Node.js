import express from 'express'
const PORT = 5004
const app = express()
//middleware - it verifies the req and response before giving output

app.use(express.json())//terminal ma body dekhauna yo use garna parxa data pathauna

//GET Method(paauni)
app.get('/',(req,res)=>{
    res.send("backend is running...")
})

app.post('/',(req,res)=>{ //(pathauni)
    //const body = req
    const data = req.body
    res.status(201).json({
        "message":"Data Posted Succesfully",
        Data:data,
        success:true
    })
   // console.log(body)
    //res.send("Hello from backend POST...")
})
app.put('/prabesh',(req,res)=>{
    res.send("hello from backend put")
})
app.delete('/biju',(req,res)=>{
    res.send("hello from backend delete")
})



app.listen(PORT,()=>{
    console.log(`server is Running on PORT://localhost:${PORT}`)
})
