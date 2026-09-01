const express=require("express");
const router=express.Router();
const musiccontroller=require("../controllers/music.controller");
const authcontoller=require("../middlewares/auth.middleware");
const multer=require("multer");

const upload=multer({storage:multer.memoryStorage()});

router.post("/upload",authcontoller.authArtist,upload.single("music"),musiccontroller.createMusic);
router.post("/album",authcontoller.authArtist,musiccontroller.createalbum);
router.get("/",authcontoller.authUser,musiccontroller.getAllMusic);
router.get("/album",authcontoller.authUser,musiccontroller.getAllAlbum);

module.exports=router