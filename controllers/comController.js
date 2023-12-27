const Post = require("../model/postModel");
const Comment = require("../model/commentModel");


const createcomment = async (req, res) => {
    try {
        const { post, user, body } = req.body; //fetch data from req body

        const comment = new Comment({
            post, user, body
        });
        //save the new comment into the database

        const savedComment = await comment.save();

        //find the post by ID,add a new comment to its comment array

        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
            .populate("comments").exec();
        res.json({ post: updatedPost });
    }
    catch (error) {
        return res.status(500).json({ error: "Error while creating comment" });
    }
};


module.exports = { createcomment };