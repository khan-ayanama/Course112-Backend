const express = require('express')

const {getFriend,postFriend, getFriends} = require('../controllers/friends.controller')

const friendsRouter = express.Router()

friendsRouter.post('/',postFriend)

friendsRouter.get('/',getFriends)

friendsRouter.get('/:friendId',getFriend)


module.exports = friendsRouter;