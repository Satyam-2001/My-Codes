import express from 'express';

const app = express()

app.get('',(req,res)=>{
    res.send('Working!!')
})

app.get('/help',(req,res)=>{
    console.log(req.query)
    res.send('Help!!')
})


app.listen(3000,()=>{
    console.log('server is working')
})