const Blog =require('../models/blog')

// creating a blog
const createBlog = (req,res)=>{
    res.send("Blog created")
}
//get all blog for that user
const getBlogs = (req,res)=>{
    res.send("all blog")
}
// get a single blog
const singleBlog = (req,res)=>{
    res.send("Single Blog")
}
//update
const updateBlog = (req,res)=>{
    res.send("Blog updated")
}
// delete
const deleteBlog = (req,res)=>{
    res.send("Blog deleted")
}


module.exports ={createBlog,getBlogs,singleBlog,updateBlog,deleteBlog}