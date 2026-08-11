const express=require("express");
const app=express();
const noteModel=require("./models/note.model")

app.use(express.json());
app.post("/notes",async (req,res)=>{
    const data=req.body
    await noteModel.create({
        title:data.title,
        desc:data.desc
    })
    res.status(201).json({
        message:"Note Creted succesfully"
    })
})
app.get("/notes",async(req,res)=>{
    const notes=await noteModel.find();
    res.status(200).json({
        message:"Note displayed succesfully",
        notes:notes
    })
})
app.delete("/notes/:id",async(req,res)=>{
    const id=req.params.id;
    if(!await noteModel.findOne({
        _id:id
    })){
        return res.status(404).json({
            message: "Note not found"
        });
    }

    await noteModel.findOneAndDelete({
        _id:id,
    })
    res.status(200).json({
        message:"Note deleted succesfully",
    })
})
app.patch("/notes/:id",async (req,res)=>{
    const id=req.params.id;
     if(!await noteModel.findOne({
        _id:id
    })){
        return res.status(404).json({
            message: "Note not found"
        });
    }

    await noteModel.findOneAndUpdate({_id:id},{
        desc:req.body.desc
    })
    res.status(200).json({
        message:"Note deleted succesfully",
    })

})

module.exports=app;