const express=require("express");
const router=express.Router();
const musiccontroller=require("../controllers/music.controller");
const multer=require("multer");

const upload=multer({storage:multer.memoryStorage()});

router.post("/upload",upload.single("music"),musiccontroller.createMusic);
router.post("/album",musiccontroller.createalbum);

module.exports=router