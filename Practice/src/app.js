const express=require("express");
const app=express();

app.use(express.json());

let notes=[];

app.post('/notes',(req,res)=>{
    if(!req.body.name){
        return res.status(400).json({
            message:"Note Name is Required"
        })
    }
    notes.push(req.body)

    res.status(201).json({
        message:"note created successfully"
    })
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        notes:notes,
        message:"notes displayed succesfully"
    })
    
})

app.get('/notes/:index',(req,res)=>{
    const index=req.params.index;
    if(!notes[index]){
        return res.status(404).json({
            message:"note not found"
        })
    }
    res.status(200).json({
        notes:notes[index],
        message:"note displayed succesfully"
    })

})
app.delete('/notes/:index',(req,res)=>{
    const index=req.params.index;
    if(!notes[index]){
        return res.status(404).json({
            message:"note not found"
        })
    }
    notes.splice(index,1);
    res.status(200).json({
        message:"note deleted succesfully"
    })

})

app.patch('/notes/:index',(req,res)=>{
    const index=req.params.index;
    if(!notes[index]){
        return res.status(400).json({
            message:"note not found"
        })
    }
    if(!req.body.name){
        return res.status(404).json({
            message:"Note Name is Required"
        })
    }
    notes[index].name=req.body.name;
    res.status(200).json({
        message:"note updated succesfully"
    })

})


module.exports=app;