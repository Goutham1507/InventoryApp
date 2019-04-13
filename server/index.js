const express =require('express')
const app =express()
const bodyparser=require('body-parser')
app.use(bodyparser.json())
app.post('/api/register',(req,res)=>{
    console.log(req.body)
    console.log(res)
})
app.listen(1234,()=>console.log('server is listening at 1234'))