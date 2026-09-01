const express=require("express");
const router=express.Router();
const musiccontroller=require("../controllers/music.controller");
const authmiddleware=require("../middlewares/auth.middleware");
const multer=require("multer");

const upload=multer({storage:multer.memoryStorage()});

router.post("/upload",authmiddleware.authArtist,upload.single("music"),musiccontroller.createMusic);
router.post("/album",authmiddleware.authArtist,musiccontroller.createalbum);
router.get("/",authmiddleware.authUser,musiccontroller.getAllMusic);
router.get("/album",authmiddleware.authUser,musiccontroller.getAllAlbum);
router.get("/album/:id",authmiddleware.authUser,musiccontroller.getAlbumById);

module.exports=router