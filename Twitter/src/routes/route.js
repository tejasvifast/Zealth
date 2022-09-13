const express = require('express');
const router = express.Router();

const { postTweet } = require("../controllers/tweetController")

const {createUser,loginUser} = require("../controllers/userController")

const {follow,unfollow} = require("../controllers/followUnfollowController")

const {authentication } =require("../middleWare/middleWare")


//===================User Apis============================================
router.post('/createUser',createUser) //done
router.post("/login",loginUser)   //done

router.put('/follow',authentication,follow)  //done
router.put('/unfollow',authentication,unfollow)  //done

router

//===================tweet Apis==============================================
router.post("/postTweet"  , postTweet)    //done     



module.exports = router; 