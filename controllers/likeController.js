const Post = require("../model/postModel");
const Like = require("../model/likeModel");


exports.likePost = async(req,res) =>{
    try{
        const{post,user} =req.body;
        const like =new Like({
            post,user,

        });
        const savedLike = await like.save();
        //update thepost collectiombasis on this

        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true});
        res.json({
            post:updatedPost,
        })
    }
    catch(error){
        return res.status(400).json({
            error:"error while creating Like"
        })
    }
}


exports.unlikePost =async(req,res) =>{
    try{
        const{post,user} =req.body;
        const deletedLike = await Like.findOneAndDelete({post:post,_id:Like});

        //updated the post collection
        const updatedPost = await Post.findByIdAndDelete(post,
                                                              {$pull:{likes:deletedLike._id}}  ,
                                                              {new:true}      );

        res.json({
            post:updatedPost,
        })
       
        
    }
    catch(error){
        return res.status(400).json({
            error:"error while creating unLike"
        })
    }
}
