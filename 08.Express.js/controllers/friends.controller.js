const friends = require('../models/friends.models')

function postFriend(req,res){
    if(!req.body.name){
        return res.status(400).json({
            error:'Friends name seems to be missing'
        })
    }
    const newFriend = {
        name: req.body.name,
        id:friends.length
    }
    friends.push(newFriend);
    res.json(friends)
}


function getFriend(req,res){
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId]
    if(friend){
        res.status(200).json(friend)
    }else{
        res.status(404).json({
            error:"Friend does not exist"
        })
    }
}

function getFriends(req,res){
    res.send(friends)
}

module.exports = {
    postFriend,
    getFriend,
    getFriends,
}