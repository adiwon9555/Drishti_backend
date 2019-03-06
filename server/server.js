const _=require('lodash');
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const fs=require('fs');

require('./config/config.js')
// const {mongoose}=require('./db/mongoose.js');
// const {Task}=require('./model/task')

var app=express();
app.use(cors());
var port=process.env.PORT;
app.use(bodyParser.json());

// app.post('/blog',(req,res)=>{
//     var data=_.pick(req.body,['text']);
//     data.createdAt=Date.now();
//     var blog=new Blog(data)
//     blog.save().then((blog)=>{
//         res.send({blog});
//     },(err)=>{
//         res.status(400).send(err);
//     })
// })
app.post('/sub',(req,res)=>{
    var data=req.body;
    console.log(data);
    res.send(data)
    
})
app.get('/task',(req,res)=>{
    
    var ar=[]
    fs.readdirSync('./Images/').forEach(file=>{
        ar.push(file)
    })
    res.send(ar)
}) 
app.get('/set2',(req,res)=>{
    
    var ar=[]
    fs.readdirSync('./Images/set2/').forEach(file=>{
        ar.push(file)
    })
    res.send(ar)
}) 

app.get('/set1',(req,res)=>{
    
    var ar=[]
    fs.readdirSync('./Images/set1/').forEach(file=>{
        ar.push(file)
    })
    res.send(ar)
}) 

// app.patch('/blog/:id',(req,res)=>{
//     var id=req.params.id;
//     Blog.findByIdAndUpdate(id,{$inc:{vote:1}},{new:true}).then(blog=>{
//         if(!blog){
//             return res.status(404).send();
//         }
//         res.send({blog});
//     },err=>{
//         res.status(400).send(err);
//     })
// })

app.listen(port,()=>{
    console.log(`Express started on port ${port}`);
})

module.exports={app};