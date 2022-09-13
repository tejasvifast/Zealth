let jwt = require("jsonwebtoken")
const blogModel = require("../models/tweetModel")


let authentication = async function (req, res, next) {
    try {
        const token = req.headers["x-api-key"]
        // console.log(token)
        if (!token) {
            return res.status(401).send({ status: false, msg: "Authentication failed" })
        }
        const decodedToken = await jwt.verify(token, "functionUp project1Blog (@#$%^&)")
        if (!decodedToken) {
            return res.status(400).send({ status: false, msg: "Token is invalid" });
        }
        req["decodedUserId"] = decodedToken.userId
        next()
    }
    catch (error) {
        return res.status(500).send({ status: false, Message: error.message })
    }
}

let authorization = async function (req, res, next) {
    try {
        const decodedAuthorId = req.decodedAuthorId
        const blogId = req.params.blogId
        const authorIdGet = req.query.authorId

        if(blogId) {
            var blog = await blogModel.findOne({ _id: blogId, isDeleted: false })
        }
        if(authorIdGet ) {
            var blog = await blogModel.findOne({ _id: blogId, isDeleted: false })
        }

        if (!blog)  return res.status(404).send({ status: false, msg: "No blog exits with this Id or the blog is deleted" })
        const authorId = blog.authorId

        if (decodedAuthorId != authorId) return res.status(403).send({ status: false, msg: "You are not Authorized" })
        next()
    }
    catch (error) {
        return res.status(500).send({ status: false, Message: error.message })
    }
}


module.exports = { authentication, authorization }
