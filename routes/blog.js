const express = require("express");
const router = express.Router();


//import controller

const{createcomment} =require("../controllers/comController");
const{createPost,getAllPosts}= require("../controllers/postController")
const{likePost,getAllPosts} =require("../controllers/likeController");





//mapping create
router.post("/comments/create",createcomment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",getAllPosts);


module.exports = router;