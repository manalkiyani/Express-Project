/*jshint esversion: 6 */

const express=require('express');

const friendsController=require('../controllers/friends.controller');

const friendsRouter=express.Router();

//we can add custom middlewares for friends router 
friendsRouter.use((req,res,next) =>
{
console.log("ip address:"+req.ip);
next();
}

);

//routes
friendsRouter.get('/',friendsController.getFriends);
friendsRouter.get('/:friendsId',friendsController.getFriend);
friendsRouter.post('/',friendsController.postFriend);





module.exports=friendsRouter;