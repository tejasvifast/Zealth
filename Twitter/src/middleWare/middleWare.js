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



module.exports = { authentication }
