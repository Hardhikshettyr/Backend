const musicmodel=require("../models/music.model");
const albummodel=require("../models/album.model");
const{uploadfile}=require("../services/storage.service");
const jwt=require("jsonwebtoken");

async function createMusic(req,res){
    
    const title=req.body.title;
    const file=req.file;

    const result=await uploadfile(file.buffer.toString("base64"));
    const music=await musicmodel.create({
        uri:result.url,
        title,
        artist:req.user.id
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

async function createalbum(req,res){
        const{title,musics}=req.body;
        const album=await albummodel.create({
            title,
            artist:req.user.id,
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
}

async function getAllMusic(req,res){
    const musics=await musicmodel.find().populate("artist","usernam email").skip(2).limit(1);
    res.status(200).json({
        message:"Music displayed Successfully",
        musics:musics
    })
}
async function getAllAlbum(req,res){
    const albums=await albummodel.find().select("title artist").populate("artist", "username email");
    res.status(200).json({
        message:"Albums displayed Successfully",
        albums:albums
    })
}
async function getAlbumById(req,res){
    const albumid=req.params.id;
    const album=await albummodel.findById(albumid).populate("artist","email username").populate("musics");
    res.status(200).json({
        message:"Albums displayed Successfully",
        album:album
    })
}
module.exports={createMusic, createalbum,getAllMusic,getAllAlbum,getAlbumById};