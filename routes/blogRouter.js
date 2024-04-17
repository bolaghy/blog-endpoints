const router = require('express').Router()
const {createBlog,getBlogs,singleBlog,updateBlog,deleteBlog} = require('../controller/blog')

router.route("/").get(getBlogs).post(createBlog)
router.route("/:blogId").get(singleBlog).patch(updateBlog).delete(deleteBlog)



module.exports = router;