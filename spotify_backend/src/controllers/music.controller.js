const musicmodel=require("../models/music.model");
const albummodel=require("../models/album.model");
const{uploadfile}=require("../services/storage.service");
const jwt=require("jsonwebtoken");

async function createMusic(req,res){
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"Unauthorized",
        })
    }
    try{
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        if(decode.role!=="artist"){
            return res.status(403).json({
                message:"Forbidden Access"
            })
        }
    

    const title=req.body.title;
    const file=req.file;

    const result=await uploadfile(file.buffer.toString("base64"));
    const music=await musicmodel.create({
        uri:result.url,
        title,
        artist:decode.id
    });

    res.status(201).json({
        message:"Music created successfully",
        music:{
            id:music.id,
            uri:music.uri,
            title:music.title,
            artist:music.artist
        }
    })
    }
    catch(err){
        console.log(err);
        return res.status(401).json({
            
            message:"Unauthorized",
        })
    }

}

async function createalbum(req,res){
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"Unauthorized",
        })
    }
    try{
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        if(decode.role!=="artist"){
            return res.status(403).json({
                message:"Forbidden Access"
            })
        }

        const{title,musics}=req.body;
        const album=await albummodel.create({
            title,
            artist:decode.id,
            musics:musics
        })
        res.status(201).json({
            message:"Album created successfully",
            album:{
                albumid:album.id,
                title:album.title,
                artist:album.artist,
                musics:album.musics
            }
        })
    }catch(err){
        console.log(err);
        return res.status(401).json({
            
            message:"Unauthorized",
        })
    }
}
module.exports={createMusic, createalbum};