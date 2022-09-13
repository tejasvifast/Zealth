const userModel = require("../models/userModel")

//#################################################################################################################################################
//VALIDATIONS

const keyValid = function (value) {
    if (typeof (value) == "undefined" || typeof (value) == null) { return true }
    if (typeof (value) === "string" && value.trim().length == 0) { return true }
    return false
}

const validTitle = function (value) {
    return ["Mr", "Mrs", "Miss"].indexOf(value.trim()) !== -1
}

const validRequestBody = function(value){
    return Object.keys(value).length > 0
}

//#################################################################################################################################################
const follow = async (req, res) => {
    try {
        const followId = req.body.followId
        const logInUser=req.decodedUserId
        console.log(logInUser)

        userModel.findByIdAndUpdate(followId,{$push:{followers:logInUser}},{new:true},(err,result)=>{
            if(err){
                return res.status(422).json({error:err})
            }

            userModel.findByIdAndUpdate(logInUser,{$push:{followee:followId}},{new:true}).then(result=>res.send(result))
        })

        // const alreadyUsedEmail = await userModel.findOne({ email: email })
        // if (alreadyUsedEmail) return res.status(400).send({ status: false, Message: "Email already exist" })

        // const createdAuthor = await userModel.create(data)
        // return res.status(201).send({ status: true, Message: "Author Created Sucessfully", data: createdAuthor })
    }
    catch (err) {
        res.status(500).send({ Error: err.message })
    }
}

const unfollow = async (req, res) => {
    try {
        const unfollowId = req.body.unfollowId
        const logInUser=req.decodedUserId
        console.log(logInUser)

        userModel.findByIdAndUpdate(unfollowId,{$pull:{followers:logInUser}},{new:true},(err,result)=>{
            if(err){
                return res.status(422).json({error:err})
            }

            userModel.findByIdAndUpdate(logInUser,{$pull:{followee:unfollowId}},{new:true}).then(result=>res.send(result))
        })

        // const alreadyUsedEmail = await userModel.findOne({ email: email })
        // if (alreadyUsedEmail) return res.status(400).send({ status: false, Message: "Email already exist" })

        // const createdAuthor = await userModel.create(data)
        // return res.status(201).send({ status: true, Message: "Author Created Sucessfully", data: createdAuthor })
    }
    catch (err) {
        res.status(500).send({ Error: err.message })
    }
}

//#################################################################################################################################################
module.exports = {follow,unfollow}
